package shared



type SuggestResult struct {
    PeopleSuggestion *PeopleSuggestion `json:"peopleSuggestion,omitempty"`
    QuerySuggestion map[string]interface{} `json:"querySuggestion,omitempty"`
    Source *Source `json:"source,omitempty"`
    SuggestedQuery *string `json:"suggestedQuery,omitempty"`
    
}

