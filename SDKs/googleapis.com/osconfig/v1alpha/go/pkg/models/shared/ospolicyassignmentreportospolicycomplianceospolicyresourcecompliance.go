package shared

type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum string

const (
	OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnumUnknown      OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "UNKNOWN"
	OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnumCompliant    OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "COMPLIANT"
	OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnumNonCompliant OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "NON_COMPLIANT"
)

type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance struct {
	ComplianceState       *OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum         `json:"complianceState"`
	ComplianceStateReason *string                                                                                          `json:"complianceStateReason"`
	ConfigSteps           []OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep `json:"configSteps"`
	ExecResourceOutput    *OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput          `json:"execResourceOutput"`
	OsPolicyResourceID    *string                                                                                          `json:"osPolicyResourceId"`
}
