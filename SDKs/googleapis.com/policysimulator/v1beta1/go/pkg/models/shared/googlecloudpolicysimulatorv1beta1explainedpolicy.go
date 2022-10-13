package shared

type GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum string

const (
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnumAccessStateUnspecified GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnumGranted                GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum = "GRANTED"
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnumNotGranted             GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnumUnknownConditional     GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnumUnknownInfoDenied      GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum string

const (
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnumNormal                        GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum = "NORMAL"
	GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnumHigh                          GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum = "HIGH"
)

type GoogleCloudPolicysimulatorV1beta1ExplainedPolicy struct {
	Access              *GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum    `json:"access"`
	BindingExplanations []GoogleCloudPolicysimulatorV1beta1BindingExplanation          `json:"bindingExplanations"`
	FullResourceName    *string                                                        `json:"fullResourceName"`
	Policy              *GoogleIamV1Policy                                             `json:"policy"`
	Relevance           *GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum `json:"relevance"`
}
