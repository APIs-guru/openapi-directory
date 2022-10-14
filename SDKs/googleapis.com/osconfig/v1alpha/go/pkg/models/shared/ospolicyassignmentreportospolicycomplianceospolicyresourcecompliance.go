package shared

type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum string

const (
	OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnumUnknown      OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "UNKNOWN"
	OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnumCompliant    OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "COMPLIANT"
	OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnumNonCompliant OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "NON_COMPLIANT"
)

type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance struct {
	ComplianceState       *OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum         `json:"complianceState,omitempty"`
	ComplianceStateReason *string                                                                                          `json:"complianceStateReason,omitempty"`
	ConfigSteps           []OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep `json:"configSteps,omitempty"`
	ExecResourceOutput    *OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput          `json:"execResourceOutput,omitempty"`
	OsPolicyResourceID    *string                                                                                          `json:"osPolicyResourceId,omitempty"`
}
