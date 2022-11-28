package shared

type DiscoveryAnalysisKindEnum string

const (
	DiscoveryAnalysisKindEnumKindUnspecified      DiscoveryAnalysisKindEnum = "KIND_UNSPECIFIED"
	DiscoveryAnalysisKindEnumPackageVulnerability DiscoveryAnalysisKindEnum = "PACKAGE_VULNERABILITY"
	DiscoveryAnalysisKindEnumBuildDetails         DiscoveryAnalysisKindEnum = "BUILD_DETAILS"
	DiscoveryAnalysisKindEnumImageBasis           DiscoveryAnalysisKindEnum = "IMAGE_BASIS"
	DiscoveryAnalysisKindEnumPackageManager       DiscoveryAnalysisKindEnum = "PACKAGE_MANAGER"
	DiscoveryAnalysisKindEnumDeployable           DiscoveryAnalysisKindEnum = "DEPLOYABLE"
	DiscoveryAnalysisKindEnumDiscovery            DiscoveryAnalysisKindEnum = "DISCOVERY"
	DiscoveryAnalysisKindEnumAttestationAuthority DiscoveryAnalysisKindEnum = "ATTESTATION_AUTHORITY"
	DiscoveryAnalysisKindEnumUpgrade              DiscoveryAnalysisKindEnum = "UPGRADE"
	DiscoveryAnalysisKindEnumCompliance           DiscoveryAnalysisKindEnum = "COMPLIANCE"
	DiscoveryAnalysisKindEnumSbom                 DiscoveryAnalysisKindEnum = "SBOM"
	DiscoveryAnalysisKindEnumSpdxPackage          DiscoveryAnalysisKindEnum = "SPDX_PACKAGE"
	DiscoveryAnalysisKindEnumSpdxFile             DiscoveryAnalysisKindEnum = "SPDX_FILE"
	DiscoveryAnalysisKindEnumSpdxRelationship     DiscoveryAnalysisKindEnum = "SPDX_RELATIONSHIP"
	DiscoveryAnalysisKindEnumDsseAttestation      DiscoveryAnalysisKindEnum = "DSSE_ATTESTATION"
)

// Discovery
// A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. The occurrence's operation will indicate the status of the analysis. Absence of an occurrence linked to this note for a resource indicates that analysis hasn't started.
type Discovery struct {
	AnalysisKind *DiscoveryAnalysisKindEnum `json:"analysisKind,omitempty"`
}
