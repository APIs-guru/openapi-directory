package shared

type DomainCallEvidence struct {
	TopHTTPCallDomains []DomainCalls `json:"topHttpCallDomains"`
	TotalHTTPCallCount *int32        `json:"totalHttpCallCount"`
}
