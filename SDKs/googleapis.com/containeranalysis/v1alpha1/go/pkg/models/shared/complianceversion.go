package shared

// ComplianceVersion
// Describes the CIS benchmark version that is applicable to a given OS and os version.
type ComplianceVersion struct {
	BenchmarkDocument *string `json:"benchmarkDocument,omitempty"`
	CpeURI            *string `json:"cpeUri,omitempty"`
	Version           *string `json:"version,omitempty"`
}
