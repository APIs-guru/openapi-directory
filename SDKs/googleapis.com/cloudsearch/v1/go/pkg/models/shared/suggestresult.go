package shared

type SuggestResult struct {
	PeopleSuggestion *PeopleSuggestion      `json:"peopleSuggestion"`
	QuerySuggestion  map[string]interface{} `json:"querySuggestion"`
	Source           *Source                `json:"source"`
	SuggestedQuery   *string                `json:"suggestedQuery"`
}
