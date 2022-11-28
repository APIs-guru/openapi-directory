package shared

// GoogleCloudRetailV2alphaRuleIgnoreAction
// Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
type GoogleCloudRetailV2alphaRuleIgnoreAction struct {
	IgnoreTerms []string `json:"ignoreTerms,omitempty"`
}
