import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED",
    Vulnerability = "VULNERABILITY",
    Build = "BUILD",
    Image = "IMAGE",
    Package = "PACKAGE",
    Deployment = "DEPLOYMENT",
    Discovery = "DISCOVERY",
    Attestation = "ATTESTATION",
    Intoto = "INTOTO",
    Sbom = "SBOM",
    SpdxPackage = "SPDX_PACKAGE",
    SpdxFile = "SPDX_FILE",
    SpdxRelationship = "SPDX_RELATIONSHIP"
}


// Note
/** 
 * A type of analysis that can be done for a resource.
**/
export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestationAuthority" })
  attestationAuthority?: Authority;

  @SpeakeasyMetadata({ data: "json, name=baseImage" })
  baseImage?: Basis;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: Build;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployable" })
  deployable?: Deployable;

  @SpeakeasyMetadata({ data: "json, name=discovery" })
  discovery?: Discovery;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=intoto" })
  intoto?: InToto;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: NoteKindEnum;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: Package;

  @SpeakeasyMetadata({ data: "json, name=relatedNoteNames" })
  relatedNoteNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=relatedUrl", elemType: RelatedUrl })
  relatedUrl?: RelatedUrl[];

  @SpeakeasyMetadata({ data: "json, name=sbom" })
  sbom?: DocumentNote;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=spdxFile" })
  spdxFile?: FileNote;

  @SpeakeasyMetadata({ data: "json, name=spdxPackage" })
  spdxPackage?: PackageInfoNote;

  @SpeakeasyMetadata({ data: "json, name=spdxRelationship" })
  spdxRelationship?: RelationshipNote;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: Vulnerability;
}
