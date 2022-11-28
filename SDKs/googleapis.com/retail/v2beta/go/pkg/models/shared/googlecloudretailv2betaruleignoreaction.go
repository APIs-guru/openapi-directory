package shared

// GoogleCloudRetailV2betaRuleIgnoreAction
// Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
type GoogleCloudRetailV2betaRuleIgnoreAction struct {
	IgnoreTerms []string `json:"ignoreTerms,omitempty"`
}
