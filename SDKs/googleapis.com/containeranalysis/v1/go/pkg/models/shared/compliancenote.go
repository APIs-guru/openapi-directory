package shared



type ComplianceNote struct {
    CisBenchmark *CisBenchmark `json:"cisBenchmark,omitempty"`
    Description *string `json:"description,omitempty"`
    Rationale *string `json:"rationale,omitempty"`
    Remediation *string `json:"remediation,omitempty"`
    ScanInstructions *string `json:"scanInstructions,omitempty"`
    Title *string `json:"title,omitempty"`
    Version []ComplianceVersion `json:"version,omitempty"`
    
}

