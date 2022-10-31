package shared




type BackendRulePathTranslationEnum string

const (
    BackendRulePathTranslationEnumPathTranslationUnspecified BackendRulePathTranslationEnum = "PATH_TRANSLATION_UNSPECIFIED"
BackendRulePathTranslationEnumConstantAddress BackendRulePathTranslationEnum = "CONSTANT_ADDRESS"
BackendRulePathTranslationEnumAppendPathToAddress BackendRulePathTranslationEnum = "APPEND_PATH_TO_ADDRESS"
)


type BackendRule struct {
    Address *string `json:"address,omitempty"`
    Deadline *float64 `json:"deadline,omitempty"`
    DisableAuth *bool `json:"disableAuth,omitempty"`
    JwtAudience *string `json:"jwtAudience,omitempty"`
    OperationDeadline *float64 `json:"operationDeadline,omitempty"`
    PathTranslation *BackendRulePathTranslationEnum `json:"pathTranslation,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    Selector *string `json:"selector,omitempty"`
    
}

