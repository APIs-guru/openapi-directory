import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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

export enum OccurrenceKindEnum {
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


// Occurrence
/** 
 * An instance of an analysis type that has been found on a resource.
**/
export class Occurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestation" })
  attestation?: Details;

  @Metadata({ data: "json, name=build" })
  build?: GrafeasV1beta1BuildDetails;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployment" })
  deployment?: GrafeasV1beta1DeploymentDetails;

  @Metadata({ data: "json, name=derivedImage" })
  derivedImage?: GrafeasV1beta1ImageDetails;

  @Metadata({ data: "json, name=discovered" })
  discovered?: GrafeasV1beta1DiscoveryDetails;

  @Metadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @Metadata({ data: "json, name=installation" })
  installation?: GrafeasV1beta1PackageDetails;

  @Metadata({ data: "json, name=intoto" })
  intoto?: GrafeasV1beta1IntotoDetails;

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

  @Metadata({ data: "json, name=vulnerability" })
  vulnerability?: GrafeasV1beta1VulnerabilityDetails;
}
