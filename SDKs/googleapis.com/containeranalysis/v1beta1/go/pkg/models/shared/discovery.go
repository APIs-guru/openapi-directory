package shared

type DiscoveryAnalysisKindEnum string

const (
	DiscoveryAnalysisKindEnumNoteKindUnspecified DiscoveryAnalysisKindEnum = "NOTE_KIND_UNSPECIFIED"
	DiscoveryAnalysisKindEnumVulnerability       DiscoveryAnalysisKindEnum = "VULNERABILITY"
	DiscoveryAnalysisKindEnumBuild               DiscoveryAnalysisKindEnum = "BUILD"
	DiscoveryAnalysisKindEnumImage               DiscoveryAnalysisKindEnum = "IMAGE"
	DiscoveryAnalysisKindEnumPackage             DiscoveryAnalysisKindEnum = "PACKAGE"
	DiscoveryAnalysisKindEnumDeployment          DiscoveryAnalysisKindEnum = "DEPLOYMENT"
	DiscoveryAnalysisKindEnumDiscovery           DiscoveryAnalysisKindEnum = "DISCOVERY"
	DiscoveryAnalysisKindEnumAttestation         DiscoveryAnalysisKindEnum = "ATTESTATION"
	DiscoveryAnalysisKindEnumIntoto              DiscoveryAnalysisKindEnum = "INTOTO"
	DiscoveryAnalysisKindEnumSbom                DiscoveryAnalysisKindEnum = "SBOM"
	DiscoveryAnalysisKindEnumSpdxPackage         DiscoveryAnalysisKindEnum = "SPDX_PACKAGE"
	DiscoveryAnalysisKindEnumSpdxFile            DiscoveryAnalysisKindEnum = "SPDX_FILE"
	DiscoveryAnalysisKindEnumSpdxRelationship    DiscoveryAnalysisKindEnum = "SPDX_RELATIONSHIP"
)

// Discovery
// A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
type Discovery struct {
	AnalysisKind *DiscoveryAnalysisKindEnum `json:"analysisKind,omitempty"`
}
