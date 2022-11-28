import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum OccurrenceKindEnum {
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
/**
 * `Occurrence` includes information about analysis occurrences for an image.
**/
export declare class Occurrence extends SpeakeasyBase {
    attestation?: Attestation;
    buildDetails?: BuildDetails;
    compliance?: ComplianceOccurrence;
    createTime?: string;
    deployment?: Deployment;
    derivedImage?: Derived;
    discovered?: Discovered;
    dsseAttestation?: DsseAttestationOccurrence;
    envelope?: Envelope;
    installation?: Installation;
    kind?: OccurrenceKindEnum;
    name?: string;
    noteName?: string;
    remediation?: string;
    resource?: Resource;
    resourceUrl?: string;
    sbom?: DocumentOccurrence;
    spdxFile?: FileOccurrence;
    spdxPackage?: PackageInfoOccurrence;
    spdxRelationship?: RelationshipOccurrence;
    updateTime?: string;
    upgrade?: UpgradeOccurrence;
    vulnerabilityDetails?: VulnerabilityDetails;
}
/**
 * `Occurrence` includes information about analysis occurrences for an image.
**/
export declare class OccurrenceInput extends SpeakeasyBase {
    attestation?: Attestation;
    buildDetails?: BuildDetails;
    compliance?: ComplianceOccurrence;
    createTime?: string;
    deployment?: Deployment;
    derivedImage?: Derived;
    discovered?: Discovered;
    dsseAttestation?: DsseAttestationOccurrence;
    envelope?: Envelope;
    installation?: InstallationInput;
    kind?: OccurrenceKindEnum;
    name?: string;
    noteName?: string;
    remediation?: string;
    resource?: Resource;
    resourceUrl?: string;
    sbom?: DocumentOccurrence;
    spdxFile?: FileOccurrence;
    spdxPackage?: PackageInfoOccurrenceInput;
    spdxRelationship?: RelationshipOccurrenceInput;
    updateTime?: string;
    upgrade?: UpgradeOccurrence;
    vulnerabilityDetails?: VulnerabilityDetailsInput;
}
