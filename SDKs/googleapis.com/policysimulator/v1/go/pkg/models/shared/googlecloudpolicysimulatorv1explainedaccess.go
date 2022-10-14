package shared

type GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum string

const (
	GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnumAccessStateUnspecified GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnumGranted                GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum = "GRANTED"
	GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnumNotGranted             GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum = "NOT_GRANTED"
	GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnumUnknownConditional     GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnumUnknownInfoDenied      GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicysimulatorV1ExplainedAccess struct {
	AccessState *GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum `json:"accessState,omitempty"`
	Errors      []GoogleRPCStatus                                           `json:"errors,omitempty"`
	Policies    []GoogleCloudPolicysimulatorV1ExplainedPolicy               `json:"policies,omitempty"`
}
