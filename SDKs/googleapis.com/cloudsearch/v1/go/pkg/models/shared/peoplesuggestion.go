package shared

// PeopleSuggestion
// This field contains information about the person being suggested.
type PeopleSuggestion struct {
	Person *Person `json:"person,omitempty"`
}
