package shared

type ListRulesetsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Rulesets      []Ruleset `json:"rulesets,omitempty"`
}
