import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttestationAuthority } from "./attestationauthority";
import { Basis } from "./basis";
import { BuildType } from "./buildtype";
import { ComplianceNote } from "./compliancenote";
import { Deployable } from "./deployable";
import { Discovery } from "./discovery";
import { DsseAttestationNote } from "./dsseattestationnote";
import { Package } from "./package";
import { RelatedUrl } from "./relatedurl";
import { DocumentNote } from "./documentnote";
import { FileNote } from "./filenote";
import { PackageInfoNote } from "./packageinfonote";
import { RelationshipNote } from "./relationshipnote";
import { UpgradeNote } from "./upgradenote";
import { VulnerabilityType } from "./vulnerabilitytype";

export enum NoteKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED"
,    PackageVulnerability = "PACKAGE_VULNERABILITY"
,    BuildDetails = "BUILD_DETAILS"
,    ImageBasis = "IMAGE_BASIS"
,    PackageManager = "PACKAGE_MANAGER"
,    Deployable = "DEPLOYABLE"
,    Discovery = "DISCOVERY"
,    AttestationAuthority = "ATTESTATION_AUTHORITY"
,    Upgrade = "UPGRADE"
,    Compliance = "COMPLIANCE"
,    Sbom = "SBOM"
,    SpdxPackage = "SPDX_PACKAGE"
,    SpdxFile = "SPDX_FILE"
,    SpdxRelationship = "SPDX_RELATIONSHIP"
,    DsseAttestation = "DSSE_ATTESTATION"
}


// Note
/** 
 * Provides a detailed description of a `Note`.
**/
export class Note extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestationAuthority" })
  attestationAuthority?: AttestationAuthority;

  @Metadata({ data: "json, name=baseImage" })
  baseImage?: Basis;

  @Metadata({ data: "json, name=buildType" })
  buildType?: BuildType;

  @Metadata({ data: "json, name=compliance" })
  compliance?: ComplianceNote;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployable" })
  deployable?: Deployable;

  @Metadata({ data: "json, name=discovery" })
  discovery?: Discovery;

  @Metadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationNote;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: NoteKindEnum;

  @Metadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=package" })
  package?: Package;

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

  @Metadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeNote;

  @Metadata({ data: "json, name=vulnerabilityType" })
  vulnerabilityType?: VulnerabilityType;
}
