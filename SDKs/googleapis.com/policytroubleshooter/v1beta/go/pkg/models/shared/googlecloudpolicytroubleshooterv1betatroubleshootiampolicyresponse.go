package shared

type GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum string

const (
	GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnumAccessStateUnspecified GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum = "ACCESS_STATE_UNSPECIFIED"
	GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnumGranted                GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum = "GRANTED"
	GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnumNotGranted             GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum = "NOT_GRANTED"
	GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnumUnknownConditional     GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum = "UNKNOWN_CONDITIONAL"
	GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnumUnknownInfoDenied      GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum = "UNKNOWN_INFO_DENIED"
)

type GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse struct {
	Access            *GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum `json:"access"`
	ExplainedPolicies []GoogleCloudPolicytroubleshooterV1betaExplainedPolicy                        `json:"explainedPolicies"`
}
