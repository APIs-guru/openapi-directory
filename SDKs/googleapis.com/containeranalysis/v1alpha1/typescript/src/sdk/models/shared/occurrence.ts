import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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

export enum OccurrenceKindEnum {
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


// Occurrence
/** 
 * `Occurrence` includes information about analysis occurrences for an image.
**/
export class Occurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestation" })
  attestation?: Attestation;

  @Metadata({ data: "json, name=buildDetails" })
  buildDetails?: BuildDetails;

  @Metadata({ data: "json, name=compliance" })
  compliance?: ComplianceOccurrence;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @Metadata({ data: "json, name=derivedImage" })
  derivedImage?: Derived;

  @Metadata({ data: "json, name=discovered" })
  discovered?: Discovered;

  @Metadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationOccurrence;

  @Metadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @Metadata({ data: "json, name=installation" })
  installation?: Installation;

  @Metadata({ data: "json, name=kind" })
  kind?: OccurrenceKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=noteName" })
  noteName?: string;

  @Metadata({ data: "json, name=remediation" })
  remediation?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: Resource;

  @Metadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @Metadata({ data: "json, name=sbom" })
  sbom?: DocumentOccurrence;

  @Metadata({ data: "json, name=spdxFile" })
  spdxFile?: FileOccurrence;

  @Metadata({ data: "json, name=spdxPackage" })
  spdxPackage?: PackageInfoOccurrence;

  @Metadata({ data: "json, name=spdxRelationship" })
  spdxRelationship?: RelationshipOccurrence;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeOccurrence;

  @Metadata({ data: "json, name=vulnerabilityDetails" })
  vulnerabilityDetails?: VulnerabilityDetails;
}
