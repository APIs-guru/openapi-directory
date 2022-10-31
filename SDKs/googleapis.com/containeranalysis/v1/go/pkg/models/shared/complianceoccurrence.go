package shared

type ComplianceOccurrence struct {
	NonComplianceReason *string            `json:"nonComplianceReason,omitempty"`
	NonCompliantFiles   []NonCompliantFile `json:"nonCompliantFiles,omitempty"`
}
