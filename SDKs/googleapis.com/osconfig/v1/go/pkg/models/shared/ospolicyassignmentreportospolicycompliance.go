package shared

type OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum string

const (
	OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnumUnknown      OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum = "UNKNOWN"
	OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnumCompliant    OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum = "COMPLIANT"
	OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnumNonCompliant OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum = "NON_COMPLIANT"
)

type OsPolicyAssignmentReportOsPolicyCompliance struct {
	ComplianceState             *OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum         `json:"complianceState"`
	ComplianceStateReason       *string                                                                `json:"complianceStateReason"`
	OsPolicyID                  *string                                                                `json:"osPolicyId"`
	OsPolicyResourceCompliances []OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance `json:"osPolicyResourceCompliances"`
}
