package shared

// DomainCallEvidence
// Number of HTTP calls made by a creative, broken down by domain.
type DomainCallEvidence struct {
	TopHTTPCallDomains []DomainCalls `json:"topHttpCallDomains,omitempty"`
	TotalHTTPCallCount *int32        `json:"totalHttpCallCount,omitempty"`
}
