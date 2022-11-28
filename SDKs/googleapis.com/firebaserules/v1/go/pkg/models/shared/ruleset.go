package shared

// Ruleset
// `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
type Ruleset struct {
	CreateTime *string   `json:"createTime,omitempty"`
	Metadata   *Metadata `json:"metadata,omitempty"`
	Name       *string   `json:"name,omitempty"`
	Source     *Source   `json:"source,omitempty"`
}

// RulesetInput
// `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
type RulesetInput struct {
	Metadata *Metadata `json:"metadata,omitempty"`
	Source   *Source   `json:"source,omitempty"`
}
