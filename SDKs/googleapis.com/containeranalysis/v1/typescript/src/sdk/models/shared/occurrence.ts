import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { DiscoveryOccurrenceInput } from "./discoveryoccurrence";
import { PackageOccurrenceInput } from "./packageoccurrence";
import { VulnerabilityOccurrenceInput } from "./vulnerabilityoccurrence";


export enum OccurrenceKindEnum {
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED",
    Vulnerability = "VULNERABILITY",
    Build = "BUILD",
    Image = "IMAGE",
    Package = "PACKAGE",
    Deployment = "DEPLOYMENT",
    Discovery = "DISCOVERY",
    Attestation = "ATTESTATION",
    Upgrade = "UPGRADE",
    Compliance = "COMPLIANCE",
    DsseAttestation = "DSSE_ATTESTATION"
}


// Occurrence
/** 
 * An instance of an analysis type that has been found on a resource.
**/
export class Occurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: AttestationOccurrence;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: BuildOccurrence;

  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance?: ComplianceOccurrence;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: DeploymentOccurrence;

  @SpeakeasyMetadata({ data: "json, name=discovery" })
  discovery?: DiscoveryOccurrence;

  @SpeakeasyMetadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationOccurrence;

  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageOccurrence;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: OccurrenceKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=noteName" })
  noteName?: string;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: PackageOccurrence;

  @SpeakeasyMetadata({ data: "json, name=remediation" })
  remediation?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeOccurrence;

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: VulnerabilityOccurrence;
}


// OccurrenceInput
/** 
 * An instance of an analysis type that has been found on a resource.
**/
export class OccurrenceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: AttestationOccurrence;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: BuildOccurrence;

  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance?: ComplianceOccurrence;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: DeploymentOccurrence;

  @SpeakeasyMetadata({ data: "json, name=discovery" })
  discovery?: DiscoveryOccurrenceInput;

  @SpeakeasyMetadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationOccurrence;

  @SpeakeasyMetadata({ data: "json, name=envelope" })
  envelope?: Envelope;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageOccurrence;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: OccurrenceKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=noteName" })
  noteName?: string;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: PackageOccurrenceInput;

  @SpeakeasyMetadata({ data: "json, name=remediation" })
  remediation?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeOccurrence;

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: VulnerabilityOccurrenceInput;
}
