package shared

type ComplianceOccurrence struct {
	NonComplianceReason *string            `json:"nonComplianceReason"`
	NonCompliantFiles   []NonCompliantFile `json:"nonCompliantFiles"`
}
