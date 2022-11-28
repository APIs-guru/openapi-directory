import { SpeakeasyBase } from "../../../internal/utils";
import { Details } from "./details";
import { GrafeasV1beta1BuildDetails } from "./grafeasv1beta1builddetails";
import { GrafeasV1beta1DeploymentDetails } from "./grafeasv1beta1deploymentdetails";
import { GrafeasV1beta1ImageDetails } from "./grafeasv1beta1imagedetails";
import { GrafeasV1beta1DiscoveryDetails } from "./grafeasv1beta1discoverydetails";
import { Envelope } from "./envelope";
import { GrafeasV1beta1PackageDetails } from "./grafeasv1beta1packagedetails";
import { GrafeasV1beta1IntotoDetails } from "./grafeasv1beta1intotodetails";
import { Resource } from "./resource";
import { DocumentOccurrence } from "./documentoccurrence";
import { FileOccurrence } from "./fileoccurrence";
import { PackageInfoOccurrence } from "./packageinfooccurrence";
import { RelationshipOccurrence } from "./relationshipoccurrence";
import { GrafeasV1beta1VulnerabilityDetails } from "./grafeasv1beta1vulnerabilitydetails";
import { GrafeasV1beta1PackageDetailsInput } from "./grafeasv1beta1packagedetails";
import { PackageInfoOccurrenceInput } from "./packageinfooccurrence";
import { RelationshipOccurrenceInput } from "./relationshipoccurrence";
import { GrafeasV1beta1VulnerabilityDetailsInput } from "./grafeasv1beta1vulnerabilitydetails";
export declare enum OccurrenceKindEnum {
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
/**
 * An instance of an analysis type that has been found on a resource.
**/
export declare class Occurrence extends SpeakeasyBase {
    attestation?: Details;
    build?: GrafeasV1beta1BuildDetails;
    createTime?: string;
    deployment?: GrafeasV1beta1DeploymentDetails;
    derivedImage?: GrafeasV1beta1ImageDetails;
    discovered?: GrafeasV1beta1DiscoveryDetails;
    envelope?: Envelope;
    installation?: GrafeasV1beta1PackageDetails;
    intoto?: GrafeasV1beta1IntotoDetails;
    kind?: OccurrenceKindEnum;
    name?: string;
    noteName?: string;
    remediation?: string;
    resource?: Resource;
    sbom?: DocumentOccurrence;
    spdxFile?: FileOccurrence;
    spdxPackage?: PackageInfoOccurrence;
    spdxRelationship?: RelationshipOccurrence;
    updateTime?: string;
    vulnerability?: GrafeasV1beta1VulnerabilityDetails;
}
/**
 * An instance of an analysis type that has been found on a resource.
**/
export declare class OccurrenceInput extends SpeakeasyBase {
    attestation?: Details;
    build?: GrafeasV1beta1BuildDetails;
    createTime?: string;
    deployment?: GrafeasV1beta1DeploymentDetails;
    derivedImage?: GrafeasV1beta1ImageDetails;
    discovered?: GrafeasV1beta1DiscoveryDetails;
    envelope?: Envelope;
    installation?: GrafeasV1beta1PackageDetailsInput;
    intoto?: GrafeasV1beta1IntotoDetails;
    kind?: OccurrenceKindEnum;
    name?: string;
    noteName?: string;
    remediation?: string;
    resource?: Resource;
    sbom?: DocumentOccurrence;
    spdxFile?: FileOccurrence;
    spdxPackage?: PackageInfoOccurrenceInput;
    spdxRelationship?: RelationshipOccurrenceInput;
    updateTime?: string;
    vulnerability?: GrafeasV1beta1VulnerabilityDetailsInput;
}
