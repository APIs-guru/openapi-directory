package shared

// Session
// A session in the Cloud Spanner API.
type Session struct {
	ApproximateLastUseTime *string           `json:"approximateLastUseTime,omitempty"`
	CreateTime             *string           `json:"createTime,omitempty"`
	CreatorRole            *string           `json:"creatorRole,omitempty"`
	Labels                 map[string]string `json:"labels,omitempty"`
	Name                   *string           `json:"name,omitempty"`
}

// SessionInput
// A session in the Cloud Spanner API.
type SessionInput struct {
	CreatorRole *string           `json:"creatorRole,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
}
