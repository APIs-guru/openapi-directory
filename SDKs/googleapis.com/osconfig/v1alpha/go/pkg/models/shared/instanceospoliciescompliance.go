package shared

type InstanceOsPoliciesComplianceStateEnum string

const (
	InstanceOsPoliciesComplianceStateEnumOsPolicyComplianceStateUnspecified InstanceOsPoliciesComplianceStateEnum = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
	InstanceOsPoliciesComplianceStateEnumCompliant                          InstanceOsPoliciesComplianceStateEnum = "COMPLIANT"
	InstanceOsPoliciesComplianceStateEnumNonCompliant                       InstanceOsPoliciesComplianceStateEnum = "NON_COMPLIANT"
	InstanceOsPoliciesComplianceStateEnumUnknown                            InstanceOsPoliciesComplianceStateEnum = "UNKNOWN"
	InstanceOsPoliciesComplianceStateEnumNoOsPoliciesApplicable             InstanceOsPoliciesComplianceStateEnum = "NO_OS_POLICIES_APPLICABLE"
)

type InstanceOsPoliciesCompliance struct {
	DetailedState           *string                                          `json:"detailedState"`
	DetailedStateReason     *string                                          `json:"detailedStateReason"`
	Instance                *string                                          `json:"instance"`
	LastComplianceCheckTime *string                                          `json:"lastComplianceCheckTime"`
	LastComplianceRunID     *string                                          `json:"lastComplianceRunId"`
	Name                    *string                                          `json:"name"`
	OsPolicyCompliances     []InstanceOsPoliciesComplianceOsPolicyCompliance `json:"osPolicyCompliances"`
	State                   *InstanceOsPoliciesComplianceStateEnum           `json:"state"`
}
