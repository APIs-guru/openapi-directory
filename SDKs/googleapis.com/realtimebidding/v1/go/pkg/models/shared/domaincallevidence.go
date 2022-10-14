package shared

type DomainCallEvidence struct {
	TopHTTPCallDomains []DomainCalls `json:"topHttpCallDomains,omitempty"`
	TotalHTTPCallCount *int32        `json:"totalHttpCallCount,omitempty"`
}
