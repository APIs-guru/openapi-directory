package shared

type DiscoveryNoteAnalysisKindEnum string

const (
	DiscoveryNoteAnalysisKindEnumNoteKindUnspecified DiscoveryNoteAnalysisKindEnum = "NOTE_KIND_UNSPECIFIED"
	DiscoveryNoteAnalysisKindEnumVulnerability       DiscoveryNoteAnalysisKindEnum = "VULNERABILITY"
	DiscoveryNoteAnalysisKindEnumBuild               DiscoveryNoteAnalysisKindEnum = "BUILD"
	DiscoveryNoteAnalysisKindEnumImage               DiscoveryNoteAnalysisKindEnum = "IMAGE"
	DiscoveryNoteAnalysisKindEnumPackage             DiscoveryNoteAnalysisKindEnum = "PACKAGE"
	DiscoveryNoteAnalysisKindEnumDeployment          DiscoveryNoteAnalysisKindEnum = "DEPLOYMENT"
	DiscoveryNoteAnalysisKindEnumDiscovery           DiscoveryNoteAnalysisKindEnum = "DISCOVERY"
	DiscoveryNoteAnalysisKindEnumAttestation         DiscoveryNoteAnalysisKindEnum = "ATTESTATION"
	DiscoveryNoteAnalysisKindEnumUpgrade             DiscoveryNoteAnalysisKindEnum = "UPGRADE"
	DiscoveryNoteAnalysisKindEnumCompliance          DiscoveryNoteAnalysisKindEnum = "COMPLIANCE"
	DiscoveryNoteAnalysisKindEnumDsseAttestation     DiscoveryNoteAnalysisKindEnum = "DSSE_ATTESTATION"
)

// DiscoveryNote
// A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
type DiscoveryNote struct {
	AnalysisKind *DiscoveryNoteAnalysisKindEnum `json:"analysisKind,omitempty"`
}
