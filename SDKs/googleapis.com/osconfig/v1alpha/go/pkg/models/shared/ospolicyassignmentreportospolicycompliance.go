package shared

type OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum string

const (
	OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnumUnknown      OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum = "UNKNOWN"
	OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnumCompliant    OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum = "COMPLIANT"
	OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnumNonCompliant OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum = "NON_COMPLIANT"
)

// OsPolicyAssignmentReportOsPolicyCompliance
// Compliance data for an OS policy
type OsPolicyAssignmentReportOsPolicyCompliance struct {
	ComplianceState             *OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum         `json:"complianceState,omitempty"`
	ComplianceStateReason       *string                                                                `json:"complianceStateReason,omitempty"`
	OsPolicyID                  *string                                                                `json:"osPolicyId,omitempty"`
	OsPolicyResourceCompliances []OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance `json:"osPolicyResourceCompliances,omitempty"`
}
