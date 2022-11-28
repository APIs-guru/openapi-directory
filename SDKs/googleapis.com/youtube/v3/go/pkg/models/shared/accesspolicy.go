package shared

// AccessPolicy
// Rights management policy for YouTube resources.
type AccessPolicy struct {
	Allowed   *bool    `json:"allowed,omitempty"`
	Exception []string `json:"exception,omitempty"`
}
