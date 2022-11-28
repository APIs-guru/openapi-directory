package shared

// DateQuestion
// A date question. Date questions default to just month + day.
type DateQuestion struct {
	IncludeTime *bool `json:"includeTime,omitempty"`
	IncludeYear *bool `json:"includeYear,omitempty"`
}
