import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttestationOccurrence } from "./attestationoccurrence";
import { BuildOccurrence } from "./buildoccurrence";
import { ComplianceOccurrence } from "./complianceoccurrence";
import { DeploymentOccurrence } from "./deploymentoccurrence";
import { DiscoveryOccurrence } from "./discoveryoccurrence";
import { DsseAttestationOccurrence } from "./dsseattestationoccurrence";
import { Envelope } from "./envelope";
import { ImageOccurrence } from "./imageoccurrence";
import { PackageOccurrence } from "./packageoccurrence";
import { UpgradeOccurrence } from "./upgradeoccurrence";
import { VulnerabilityOccurrence } from "./vulnerabilityoccurrence";

export enum OccurrenceKindEnum {
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED"
,    Vulnerability = "VULNERABILITY"
,    Build = "BUILD"
,    Image = "IMAGE"
,    Package = "PACKAGE"
,    Deployment = "DEPLOYMENT"
,    Discovery = "DISCOVERY"
,    Attestation = "ATTESTATION"
,    Upgrade = "UPGRADE"
,    Compliance = "COMPLIANCE"
,    DsseAttestation = "DSSE_ATTESTATION"
}


// Occurrence
/** 
 * An instance of an analysis type that has been found on a resource.
**/
export class Occurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestation" })
  attestation?: AttestationOccurrence;

  @Metadata({ data: "json, name=build" })
  build?: BuildOccurrence;

  @Metadata({ data: "json, name=compliance" })
  compliance?: ComplianceOccurrence;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployment" })
  deployment?: DeploymentOccurrence;

  @Metadata({ data: "json, name=discovery" })
  discovery?: DiscoveryOccurrence;

  @Metadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationOccurrence;

  @Metadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @Metadata({ data: "json, name=image" })
  image?: ImageOccurrence;

  @Metadata({ data: "json, name=kind" })
  kind?: OccurrenceKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=noteName" })
  noteName?: string;

  @Metadata({ data: "json, name=package" })
  package?: PackageOccurrence;

  @Metadata({ data: "json, name=remediation" })
  remediation?: string;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeOccurrence;

  @Metadata({ data: "json, name=vulnerability" })
  vulnerability?: VulnerabilityOccurrence;
}
