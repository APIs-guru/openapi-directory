import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Authority } from "./authority";
import { Basis } from "./basis";
import { Build } from "./build";
import { Deployable } from "./deployable";
import { Discovery } from "./discovery";
import { InToto } from "./intoto";
import { Package } from "./package";
import { RelatedUrl } from "./relatedurl";
import { DocumentNote } from "./documentnote";
import { FileNote } from "./filenote";
import { PackageInfoNote } from "./packageinfonote";
import { RelationshipNote } from "./relationshipnote";
import { Vulnerability } from "./vulnerability";

export enum NoteKindEnum {
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED"
,    Vulnerability = "VULNERABILITY"
,    Build = "BUILD"
,    Image = "IMAGE"
,    Package = "PACKAGE"
,    Deployment = "DEPLOYMENT"
,    Discovery = "DISCOVERY"
,    Attestation = "ATTESTATION"
,    Intoto = "INTOTO"
,    Sbom = "SBOM"
,    SpdxPackage = "SPDX_PACKAGE"
,    SpdxFile = "SPDX_FILE"
,    SpdxRelationship = "SPDX_RELATIONSHIP"
}


// Note
/** 
 * A type of analysis that can be done for a resource.
**/
export class Note extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestationAuthority" })
  attestationAuthority?: Authority;

  @Metadata({ data: "json, name=baseImage" })
  baseImage?: Basis;

  @Metadata({ data: "json, name=build" })
  build?: Build;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployable" })
  deployable?: Deployable;

  @Metadata({ data: "json, name=discovery" })
  discovery?: Discovery;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=intoto" })
  intoto?: InToto;

  @Metadata({ data: "json, name=kind" })
  kind?: NoteKindEnum;

  @Metadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=package" })
  package?: Package;

  @Metadata({ data: "json, name=relatedNoteNames" })
  relatedNoteNames?: string[];

  @Metadata({ data: "json, name=relatedUrl", elemType: shared.RelatedUrl })
  relatedUrl?: RelatedUrl[];

  @Metadata({ data: "json, name=sbom" })
  sbom?: DocumentNote;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=spdxFile" })
  spdxFile?: FileNote;

  @Metadata({ data: "json, name=spdxPackage" })
  spdxPackage?: PackageInfoNote;

  @Metadata({ data: "json, name=spdxRelationship" })
  spdxRelationship?: RelationshipNote;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=vulnerability" })
  vulnerability?: Vulnerability;
}
