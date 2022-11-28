package shared

type CompletionResultTypeEnum string

const (
	CompletionResultTypeEnumCompletionTypeUnspecified CompletionResultTypeEnum = "COMPLETION_TYPE_UNSPECIFIED"
	CompletionResultTypeEnumJobTitle                  CompletionResultTypeEnum = "JOB_TITLE"
	CompletionResultTypeEnumCompanyName               CompletionResultTypeEnum = "COMPANY_NAME"
	CompletionResultTypeEnumCombined                  CompletionResultTypeEnum = "COMBINED"
)

// CompletionResult
// Output only. Resource that represents completion results.
type CompletionResult struct {
	ImageURI   *string                   `json:"imageUri,omitempty"`
	Suggestion *string                   `json:"suggestion,omitempty"`
	Type       *CompletionResultTypeEnum `json:"type,omitempty"`
}
