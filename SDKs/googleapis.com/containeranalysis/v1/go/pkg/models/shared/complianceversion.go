package shared

type ComplianceVersion struct {
	BenchmarkDocument *string `json:"benchmarkDocument"`
	CpeURI            *string `json:"cpeUri"`
	Version           *string `json:"version"`
}
