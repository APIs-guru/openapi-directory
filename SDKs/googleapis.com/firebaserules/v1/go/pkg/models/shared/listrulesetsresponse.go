package shared

// ListRulesetsResponse
// The response for FirebaseRulesService.ListRulesets.
type ListRulesetsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Rulesets      []Ruleset `json:"rulesets,omitempty"`
}
