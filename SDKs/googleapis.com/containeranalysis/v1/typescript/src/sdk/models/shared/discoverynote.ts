import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiscoveryNoteAnalysisKindEnum {
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


// DiscoveryNote
/** 
 * A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
**/
export class DiscoveryNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisKind" })
  analysisKind?: DiscoveryNoteAnalysisKindEnum;
}
