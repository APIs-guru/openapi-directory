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

type DiscoveryNote struct {
	AnalysisKind *DiscoveryNoteAnalysisKindEnum `json:"analysisKind,omitempty"`
}
