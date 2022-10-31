package shared

type InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum string

const (
	InstanceOsPoliciesComplianceOsPolicyComplianceStateEnumOsPolicyComplianceStateUnspecified InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
	InstanceOsPoliciesComplianceOsPolicyComplianceStateEnumCompliant                          InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum = "COMPLIANT"
	InstanceOsPoliciesComplianceOsPolicyComplianceStateEnumNonCompliant                       InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum = "NON_COMPLIANT"
	InstanceOsPoliciesComplianceOsPolicyComplianceStateEnumUnknown                            InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum = "UNKNOWN"
	InstanceOsPoliciesComplianceOsPolicyComplianceStateEnumNoOsPoliciesApplicable             InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum = "NO_OS_POLICIES_APPLICABLE"
)

type InstanceOsPoliciesComplianceOsPolicyCompliance struct {
	OsPolicyAssignment          *string                                                  `json:"osPolicyAssignment,omitempty"`
	OsPolicyID                  *string                                                  `json:"osPolicyId,omitempty"`
	OsPolicyResourceCompliances []OsPolicyResourceCompliance                             `json:"osPolicyResourceCompliances,omitempty"`
	State                       *InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum `json:"state,omitempty"`
}
