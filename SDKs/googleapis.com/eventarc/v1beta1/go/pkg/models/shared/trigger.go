package shared

type Trigger struct {
	CreateTime       *string            `json:"createTime"`
	Destination      *Destination       `json:"destination"`
	Etag             *string            `json:"etag"`
	Labels           map[string]string  `json:"labels"`
	MatchingCriteria []MatchingCriteria `json:"matchingCriteria"`
	Name             *string            `json:"name"`
	ServiceAccount   *string            `json:"serviceAccount"`
	Transport        *Transport         `json:"transport"`
	UpdateTime       *string            `json:"updateTime"`
}
