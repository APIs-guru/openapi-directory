import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiscoveryAnalysisKindEnum {
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
 * A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
**/
export declare class Discovery extends SpeakeasyBase {
    analysisKind?: DiscoveryAnalysisKindEnum;
}
