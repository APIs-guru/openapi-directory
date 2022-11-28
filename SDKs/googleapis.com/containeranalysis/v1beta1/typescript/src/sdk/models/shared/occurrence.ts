import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum OccurrenceKindEnum {
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


// Occurrence
/** 
 * An instance of an analysis type that has been found on a resource.
**/
export class Occurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: Details;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: GrafeasV1beta1BuildDetails;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: GrafeasV1beta1DeploymentDetails;

  @SpeakeasyMetadata({ data: "json, name=derivedImage" })
  derivedImage?: GrafeasV1beta1ImageDetails;

  @SpeakeasyMetadata({ data: "json, name=discovered" })
  discovered?: GrafeasV1beta1DiscoveryDetails;

  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=installation" })
  installation?: GrafeasV1beta1PackageDetails;

  @SpeakeasyMetadata({ data: "json, name=intoto" })
  intoto?: GrafeasV1beta1IntotoDetails;

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

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: GrafeasV1beta1VulnerabilityDetails;
}


// OccurrenceInput
/** 
 * An instance of an analysis type that has been found on a resource.
**/
export class OccurrenceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: Details;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: GrafeasV1beta1BuildDetails;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: GrafeasV1beta1DeploymentDetails;

  @SpeakeasyMetadata({ data: "json, name=derivedImage" })
  derivedImage?: GrafeasV1beta1ImageDetails;

  @SpeakeasyMetadata({ data: "json, name=discovered" })
  discovered?: GrafeasV1beta1DiscoveryDetails;

  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=installation" })
  installation?: GrafeasV1beta1PackageDetailsInput;

  @SpeakeasyMetadata({ data: "json, name=intoto" })
  intoto?: GrafeasV1beta1IntotoDetails;

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

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: GrafeasV1beta1VulnerabilityDetailsInput;
}
