package shared

type GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum string

const (
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnumAccessStateUnspecified GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnumGranted                GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum = "GRANTED"
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnumNotGranted             GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnumUnknownConditional     GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnumUnknownInfoDenied      GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum string

const (
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnumNormal                        GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum = "NORMAL"
	GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnumHigh                          GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum = "HIGH"
)

type GoogleCloudPolicytroubleshooterV1ExplainedPolicy struct {
	Access              *GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum    `json:"access"`
	BindingExplanations []GoogleCloudPolicytroubleshooterV1BindingExplanation          `json:"bindingExplanations"`
	FullResourceName    *string                                                        `json:"fullResourceName"`
	Policy              *GoogleIamV1Policy                                             `json:"policy"`
	Relevance           *GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum `json:"relevance"`
}
