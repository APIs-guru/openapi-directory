package shared

type GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum string

const (
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnumAccessStateUnspecified GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnumGranted                GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum = "GRANTED"
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnumNotGranted             GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnumUnknownConditional     GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnumUnknownInfoDenied      GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum string

const (
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnumHeuristicRelevanceUnspecified GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum = "HEURISTIC_RELEVANCE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnumNormal                        GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum = "NORMAL"
	GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnumHigh                          GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum = "HIGH"
)

type GoogleCloudPolicytroubleshooterV1betaExplainedPolicy struct {
	Access              *GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum    `json:"access"`
	BindingExplanations []GoogleCloudPolicytroubleshooterV1betaBindingExplanation          `json:"bindingExplanations"`
	FullResourceName    *string                                                            `json:"fullResourceName"`
	Policy              *GoogleIamV1Policy                                                 `json:"policy"`
	Relevance           *GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum `json:"relevance"`
}
