package shared




type BinaryAuthorizationEvaluationModeEnum string

const (
    BinaryAuthorizationEvaluationModeEnumEvaluationModeUnspecified BinaryAuthorizationEvaluationModeEnum = "EVALUATION_MODE_UNSPECIFIED"
BinaryAuthorizationEvaluationModeEnumDisabled BinaryAuthorizationEvaluationModeEnum = "DISABLED"
BinaryAuthorizationEvaluationModeEnumProjectSingletonPolicyEnforce BinaryAuthorizationEvaluationModeEnum = "PROJECT_SINGLETON_POLICY_ENFORCE"
)


type BinaryAuthorization struct {
    Enabled *bool `json:"enabled,omitempty"`
    EvaluationMode *BinaryAuthorizationEvaluationModeEnum `json:"evaluationMode,omitempty"`
    
}

