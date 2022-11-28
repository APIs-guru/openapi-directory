import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiscoveryAnalysisKindEnum {
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


// Discovery
/** 
 * A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
**/
export class Discovery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisKind" })
  analysisKind?: DiscoveryAnalysisKindEnum;
}
