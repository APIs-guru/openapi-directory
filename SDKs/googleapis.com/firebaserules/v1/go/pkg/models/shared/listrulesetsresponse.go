package shared

type ListRulesetsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Rulesets      []Ruleset `json:"rulesets"`
}
