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

type Discovery struct {
	AnalysisKind *DiscoveryAnalysisKindEnum `json:"analysisKind"`
}
