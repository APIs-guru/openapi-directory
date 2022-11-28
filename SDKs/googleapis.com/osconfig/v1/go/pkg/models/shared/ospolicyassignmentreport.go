package shared

// OsPolicyAssignmentReport
// A report of the OS policy assignment status for a given instance.
type OsPolicyAssignmentReport struct {
	Instance            *string                                      `json:"instance,omitempty"`
	LastRunID           *string                                      `json:"lastRunId,omitempty"`
	Name                *string                                      `json:"name,omitempty"`
	OsPolicyAssignment  *string                                      `json:"osPolicyAssignment,omitempty"`
	OsPolicyCompliances []OsPolicyAssignmentReportOsPolicyCompliance `json:"osPolicyCompliances,omitempty"`
	UpdateTime          *string                                      `json:"updateTime,omitempty"`
}
