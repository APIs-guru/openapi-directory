package shared

type Ruleset struct {
	CreateTime *string   `json:"createTime"`
	Metadata   *Metadata `json:"metadata"`
	Name       *string   `json:"name"`
	Source     *Source   `json:"source"`
}
