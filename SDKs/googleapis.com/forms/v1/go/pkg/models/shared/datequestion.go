package shared

type DateQuestion struct {
	IncludeTime *bool `json:"includeTime,omitempty"`
	IncludeYear *bool `json:"includeYear,omitempty"`
}
