package shared

type AccessPolicy struct {
	Allowed   *bool    `json:"allowed,omitempty"`
	Exception []string `json:"exception,omitempty"`
}
