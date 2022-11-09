import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DiscoveryAnalysisKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED"
,    PackageVulnerability = "PACKAGE_VULNERABILITY"
,    BuildDetails = "BUILD_DETAILS"
,    ImageBasis = "IMAGE_BASIS"
,    PackageManager = "PACKAGE_MANAGER"
,    Deployable = "DEPLOYABLE"
,    Discovery = "DISCOVERY"
,    AttestationAuthority = "ATTESTATION_AUTHORITY"
,    Upgrade = "UPGRADE"
,    Compliance = "COMPLIANCE"
,    Sbom = "SBOM"
,    SpdxPackage = "SPDX_PACKAGE"
,    SpdxFile = "SPDX_FILE"
,    SpdxRelationship = "SPDX_RELATIONSHIP"
,    DsseAttestation = "DSSE_ATTESTATION"
}


// Discovery
/** 
 * A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. The occurrence's operation will indicate the status of the analysis. Absence of an occurrence linked to this note for a resource indicates that analysis hasn't started.
**/
export class Discovery extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisKind" })
  analysisKind?: DiscoveryAnalysisKindEnum;
}
