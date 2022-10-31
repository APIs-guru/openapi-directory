package shared




type OsPolicyResourceComplianceStateEnum string

const (
    OsPolicyResourceComplianceStateEnumOsPolicyComplianceStateUnspecified OsPolicyResourceComplianceStateEnum = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
OsPolicyResourceComplianceStateEnumCompliant OsPolicyResourceComplianceStateEnum = "COMPLIANT"
OsPolicyResourceComplianceStateEnumNonCompliant OsPolicyResourceComplianceStateEnum = "NON_COMPLIANT"
OsPolicyResourceComplianceStateEnumUnknown OsPolicyResourceComplianceStateEnum = "UNKNOWN"
OsPolicyResourceComplianceStateEnumNoOsPoliciesApplicable OsPolicyResourceComplianceStateEnum = "NO_OS_POLICIES_APPLICABLE"
)


type OsPolicyResourceCompliance struct {
    ConfigSteps []OsPolicyResourceConfigStep `json:"configSteps,omitempty"`
    ExecResourceOutput *OsPolicyResourceComplianceExecResourceOutput `json:"execResourceOutput,omitempty"`
    OsPolicyResourceID *string `json:"osPolicyResourceId,omitempty"`
    State *OsPolicyResourceComplianceStateEnum `json:"state,omitempty"`
    
}

