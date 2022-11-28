package shared

// GoogleCloudRetailV2RuleIgnoreAction
// Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
type GoogleCloudRetailV2RuleIgnoreAction struct {
	IgnoreTerms []string `json:"ignoreTerms,omitempty"`
}
