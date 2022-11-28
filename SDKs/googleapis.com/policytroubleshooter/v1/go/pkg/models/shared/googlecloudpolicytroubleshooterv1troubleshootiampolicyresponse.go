package shared

type GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum string

const (
	GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnumAccessStateUnspecified GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnumGranted                GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum = "GRANTED"
	GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnumNotGranted             GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnumUnknownConditional     GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnumUnknownInfoDenied      GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum = "UNKNOWN_INFO_DENIED"
)

// GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
// Response for TroubleshootIamPolicy.
type GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse struct {
	Access            *GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum `json:"access,omitempty"`
	Errors            []GoogleRPCStatus                                                         `json:"errors,omitempty"`
	ExplainedPolicies []GoogleCloudPolicytroubleshooterV1ExplainedPolicy                        `json:"explainedPolicies,omitempty"`
}
