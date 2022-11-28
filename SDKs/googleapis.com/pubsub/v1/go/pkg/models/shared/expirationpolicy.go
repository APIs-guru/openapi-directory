package shared

// ExpirationPolicy
// A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion).
type ExpirationPolicy struct {
	TTL *string `json:"ttl,omitempty"`
}
