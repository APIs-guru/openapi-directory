package shared

type InstanceOsPoliciesComplianceStateEnum string

const (
	InstanceOsPoliciesComplianceStateEnumOsPolicyComplianceStateUnspecified InstanceOsPoliciesComplianceStateEnum = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
	InstanceOsPoliciesComplianceStateEnumCompliant                          InstanceOsPoliciesComplianceStateEnum = "COMPLIANT"
	InstanceOsPoliciesComplianceStateEnumNonCompliant                       InstanceOsPoliciesComplianceStateEnum = "NON_COMPLIANT"
	InstanceOsPoliciesComplianceStateEnumUnknown                            InstanceOsPoliciesComplianceStateEnum = "UNKNOWN"
	InstanceOsPoliciesComplianceStateEnumNoOsPoliciesApplicable             InstanceOsPoliciesComplianceStateEnum = "NO_OS_POLICIES_APPLICABLE"
)

// InstanceOsPoliciesCompliance
// This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
type InstanceOsPoliciesCompliance struct {
	DetailedState           *string                                          `json:"detailedState,omitempty"`
	DetailedStateReason     *string                                          `json:"detailedStateReason,omitempty"`
	Instance                *string                                          `json:"instance,omitempty"`
	LastComplianceCheckTime *string                                          `json:"lastComplianceCheckTime,omitempty"`
	LastComplianceRunID     *string                                          `json:"lastComplianceRunId,omitempty"`
	Name                    *string                                          `json:"name,omitempty"`
	OsPolicyCompliances     []InstanceOsPoliciesComplianceOsPolicyCompliance `json:"osPolicyCompliances,omitempty"`
	State                   *InstanceOsPoliciesComplianceStateEnum           `json:"state,omitempty"`
}
