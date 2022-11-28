package shared

// ComplianceOccurrence
// An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
type ComplianceOccurrence struct {
	NonComplianceReason *string            `json:"nonComplianceReason,omitempty"`
	NonCompliantFiles   []NonCompliantFile `json:"nonCompliantFiles,omitempty"`
}
