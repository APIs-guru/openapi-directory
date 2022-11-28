import { SpeakeasyBase } from "../../../internal/utils";
import { AttestationNote } from "./attestationnote";
import { BuildNote } from "./buildnote";
import { ComplianceNote } from "./compliancenote";
import { DeploymentNote } from "./deploymentnote";
import { DiscoveryNote } from "./discoverynote";
import { DsseAttestationNote } from "./dsseattestationnote";
import { ImageNote } from "./imagenote";
import { PackageNote } from "./packagenote";
import { RelatedUrl } from "./relatedurl";
import { UpgradeNote } from "./upgradenote";
import { VulnerabilityNote } from "./vulnerabilitynote";
export declare enum NoteKindEnum {
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
 * A type of analysis that can be done for a resource.
**/
export declare class Note extends SpeakeasyBase {
    attestation?: AttestationNote;
    build?: BuildNote;
    compliance?: ComplianceNote;
    createTime?: string;
    deployment?: DeploymentNote;
    discovery?: DiscoveryNote;
    dsseAttestation?: DsseAttestationNote;
    expirationTime?: string;
    image?: ImageNote;
    kind?: NoteKindEnum;
    longDescription?: string;
    name?: string;
    package?: PackageNote;
    relatedNoteNames?: string[];
    relatedUrl?: RelatedUrl[];
    shortDescription?: string;
    updateTime?: string;
    upgrade?: UpgradeNote;
    vulnerability?: VulnerabilityNote;
}
