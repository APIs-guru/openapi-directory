import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attestation } from "./attestation";
import { BuildDetails } from "./builddetails";
import { ComplianceOccurrence } from "./complianceoccurrence";
import { Deployment } from "./deployment";
import { Derived } from "./derived";
import { Discovered } from "./discovered";
import { DsseAttestationOccurrence } from "./dsseattestationoccurrence";
import { Envelope } from "./envelope";
import { Installation } from "./installation";
import { Resource } from "./resource";
import { DocumentOccurrence } from "./documentoccurrence";
import { FileOccurrence } from "./fileoccurrence";
import { PackageInfoOccurrence } from "./packageinfooccurrence";
import { RelationshipOccurrence } from "./relationshipoccurrence";
import { UpgradeOccurrence } from "./upgradeoccurrence";
import { VulnerabilityDetails } from "./vulnerabilitydetails";
import { InstallationInput } from "./installation";
import { PackageInfoOccurrenceInput } from "./packageinfooccurrence";
import { RelationshipOccurrenceInput } from "./relationshipoccurrence";
import { VulnerabilityDetailsInput } from "./vulnerabilitydetails";


export enum OccurrenceKindEnum {
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


// Occurrence
/** 
 * `Occurrence` includes information about analysis occurrences for an image.
**/
export class Occurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: Attestation;

  @SpeakeasyMetadata({ data: "json, name=buildDetails" })
  buildDetails?: BuildDetails;

  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance?: ComplianceOccurrence;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @SpeakeasyMetadata({ data: "json, name=derivedImage" })
  derivedImage?: Derived;

  @SpeakeasyMetadata({ data: "json, name=discovered" })
  discovered?: Discovered;

  @SpeakeasyMetadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationOccurrence;

  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=installation" })
  installation?: Installation;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: OccurrenceKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=noteName" })
  noteName?: string;

  @SpeakeasyMetadata({ data: "json, name=remediation" })
  remediation?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Resource;

  @SpeakeasyMetadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sbom" })
  sbom?: DocumentOccurrence;

  @SpeakeasyMetadata({ data: "json, name=spdxFile" })
  spdxFile?: FileOccurrence;

  @SpeakeasyMetadata({ data: "json, name=spdxPackage" })
  spdxPackage?: PackageInfoOccurrence;

  @SpeakeasyMetadata({ data: "json, name=spdxRelationship" })
  spdxRelationship?: RelationshipOccurrence;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeOccurrence;

  @SpeakeasyMetadata({ data: "json, name=vulnerabilityDetails" })
  vulnerabilityDetails?: VulnerabilityDetails;
}


// OccurrenceInput
/** 
 * `Occurrence` includes information about analysis occurrences for an image.
**/
export class OccurrenceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: Attestation;

  @SpeakeasyMetadata({ data: "json, name=buildDetails" })
  buildDetails?: BuildDetails;

  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance?: ComplianceOccurrence;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @SpeakeasyMetadata({ data: "json, name=derivedImage" })
  derivedImage?: Derived;

  @SpeakeasyMetadata({ data: "json, name=discovered" })
  discovered?: Discovered;

  @SpeakeasyMetadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationOccurrence;

  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=installation" })
  installation?: InstallationInput;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: OccurrenceKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=noteName" })
  noteName?: string;

  @SpeakeasyMetadata({ data: "json, name=remediation" })
  remediation?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Resource;

  @SpeakeasyMetadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sbom" })
  sbom?: DocumentOccurrence;

  @SpeakeasyMetadata({ data: "json, name=spdxFile" })
  spdxFile?: FileOccurrence;

  @SpeakeasyMetadata({ data: "json, name=spdxPackage" })
  spdxPackage?: PackageInfoOccurrenceInput;

  @SpeakeasyMetadata({ data: "json, name=spdxRelationship" })
  spdxRelationship?: RelationshipOccurrenceInput;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeOccurrence;

  @SpeakeasyMetadata({ data: "json, name=vulnerabilityDetails" })
  vulnerabilityDetails?: VulnerabilityDetailsInput;
}
