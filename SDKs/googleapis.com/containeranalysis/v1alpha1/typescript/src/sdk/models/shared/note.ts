import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    KindUnspecified = "KIND_UNSPECIFIED",
    PackageVulnerability = "PACKAGE_VULNERABILITY",
    BuildDetails = "BUILD_DETAILS",
    ImageBasis = "IMAGE_BASIS",
    PackageManager = "PACKAGE_MANAGER",
    Deployable = "DEPLOYABLE",
    Discovery = "DISCOVERY",
    AttestationAuthority = "ATTESTATION_AUTHORITY",
    Upgrade = "UPGRADE",
    Compliance = "COMPLIANCE",
    Sbom = "SBOM",
    SpdxPackage = "SPDX_PACKAGE",
    SpdxFile = "SPDX_FILE",
    SpdxRelationship = "SPDX_RELATIONSHIP",
    DsseAttestation = "DSSE_ATTESTATION"
}


// Note
/** 
 * Provides a detailed description of a `Note`.
**/
export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestationAuthority" })
  attestationAuthority?: AttestationAuthority;

  @SpeakeasyMetadata({ data: "json, name=baseImage" })
  baseImage?: Basis;

  @SpeakeasyMetadata({ data: "json, name=buildType" })
  buildType?: BuildType;

  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance?: ComplianceNote;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployable" })
  deployable?: Deployable;

  @SpeakeasyMetadata({ data: "json, name=discovery" })
  discovery?: Discovery;

  @SpeakeasyMetadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationNote;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: NoteKindEnum;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: Package;

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

  @SpeakeasyMetadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeNote;

  @SpeakeasyMetadata({ data: "json, name=vulnerabilityType" })
  vulnerabilityType?: VulnerabilityType;
}
