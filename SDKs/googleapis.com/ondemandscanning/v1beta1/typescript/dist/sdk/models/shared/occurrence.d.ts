import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum OccurrenceKindEnum {
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
/**
 * An instance of an analysis type that has been found on a resource.
**/
export declare class Occurrence extends SpeakeasyBase {
    attestation?: AttestationOccurrence;
    build?: BuildOccurrence;
    compliance?: ComplianceOccurrence;
    createTime?: string;
    deployment?: DeploymentOccurrence;
    discovery?: DiscoveryOccurrence;
    dsseAttestation?: DsseAttestationOccurrence;
    envelope?: Envelope;
    image?: ImageOccurrence;
    kind?: OccurrenceKindEnum;
    name?: string;
    noteName?: string;
    package?: PackageOccurrence;
    remediation?: string;
    resourceUri?: string;
    updateTime?: string;
    upgrade?: UpgradeOccurrence;
    vulnerability?: VulnerabilityOccurrence;
}
