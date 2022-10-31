package shared




type InstanceOsPoliciesComplianceStateEnum string

const (
    InstanceOsPoliciesComplianceStateEnumOsPolicyComplianceStateUnspecified InstanceOsPoliciesComplianceStateEnum = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
InstanceOsPoliciesComplianceStateEnumCompliant InstanceOsPoliciesComplianceStateEnum = "COMPLIANT"
InstanceOsPoliciesComplianceStateEnumNonCompliant InstanceOsPoliciesComplianceStateEnum = "NON_COMPLIANT"
InstanceOsPoliciesComplianceStateEnumUnknown InstanceOsPoliciesComplianceStateEnum = "UNKNOWN"
InstanceOsPoliciesComplianceStateEnumNoOsPoliciesApplicable InstanceOsPoliciesComplianceStateEnum = "NO_OS_POLICIES_APPLICABLE"
)


type InstanceOsPoliciesCompliance struct {
    DetailedState *string `json:"detailedState,omitempty"`
    DetailedStateReason *string `json:"detailedStateReason,omitempty"`
    Instance *string `json:"instance,omitempty"`
    LastComplianceCheckTime *string `json:"lastComplianceCheckTime,omitempty"`
    LastComplianceRunID *string `json:"lastComplianceRunId,omitempty"`
    Name *string `json:"name,omitempty"`
    OsPolicyCompliances []InstanceOsPoliciesComplianceOsPolicyCompliance `json:"osPolicyCompliances,omitempty"`
    State *InstanceOsPoliciesComplianceStateEnum `json:"state,omitempty"`
    
}

