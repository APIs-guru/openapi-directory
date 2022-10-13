package shared

type OsPolicyAssignmentReport struct {
	Instance            *string                                      `json:"instance"`
	LastRunID           *string                                      `json:"lastRunId"`
	Name                *string                                      `json:"name"`
	OsPolicyAssignment  *string                                      `json:"osPolicyAssignment"`
	OsPolicyCompliances []OsPolicyAssignmentReportOsPolicyCompliance `json:"osPolicyCompliances"`
	UpdateTime          *string                                      `json:"updateTime"`
}
