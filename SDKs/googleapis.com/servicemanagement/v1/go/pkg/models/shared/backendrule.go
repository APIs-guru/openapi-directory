package shared

type BackendRulePathTranslationEnum string

const (
	BackendRulePathTranslationEnumPathTranslationUnspecified BackendRulePathTranslationEnum = "PATH_TRANSLATION_UNSPECIFIED"
	BackendRulePathTranslationEnumConstantAddress            BackendRulePathTranslationEnum = "CONSTANT_ADDRESS"
	BackendRulePathTranslationEnumAppendPathToAddress        BackendRulePathTranslationEnum = "APPEND_PATH_TO_ADDRESS"
)

type BackendRule struct {
	Address           *string                         `json:"address"`
	Deadline          *float64                        `json:"deadline"`
	DisableAuth       *bool                           `json:"disableAuth"`
	JwtAudience       *string                         `json:"jwtAudience"`
	OperationDeadline *float64                        `json:"operationDeadline"`
	PathTranslation   *BackendRulePathTranslationEnum `json:"pathTranslation"`
	Protocol          *string                         `json:"protocol"`
	Selector          *string                         `json:"selector"`
}
