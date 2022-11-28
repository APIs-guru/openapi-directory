package shared

type GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum string

const (
	GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnumAccessStateUnspecified GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnumGranted                GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum = "GRANTED"
	GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnumNotGranted             GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum = "NOT_GRANTED"
	GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnumUnknownConditional     GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnumUnknownInfoDenied      GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum = "UNKNOWN_INFO_DENIED"
)

// GoogleCloudPolicysimulatorV1beta1ExplainedAccess
// Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
type GoogleCloudPolicysimulatorV1beta1ExplainedAccess struct {
	AccessState *GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum `json:"accessState,omitempty"`
	Errors      []GoogleRPCStatus                                                `json:"errors,omitempty"`
	Policies    []GoogleCloudPolicysimulatorV1beta1ExplainedPolicy               `json:"policies,omitempty"`
}
