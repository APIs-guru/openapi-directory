package shared

type ComplianceNote struct {
	CisBenchmark     *CisBenchmark       `json:"cisBenchmark"`
	Description      *string             `json:"description"`
	Rationale        *string             `json:"rationale"`
	Remediation      *string             `json:"remediation"`
	ScanInstructions *string             `json:"scanInstructions"`
	Title            *string             `json:"title"`
	Version          []ComplianceVersion `json:"version"`
}
