package shared



type ComplianceVersion struct {
    BenchmarkDocument *string `json:"benchmarkDocument,omitempty"`
    CpeURI *string `json:"cpeUri,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

