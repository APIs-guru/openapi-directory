package shared

// DomainCalls
// The number of HTTP calls made to the given domain.
type DomainCalls struct {
	Domain        *string `json:"domain,omitempty"`
	HTTPCallCount *int32  `json:"httpCallCount,omitempty"`
}
