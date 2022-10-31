package shared

type DomainCalls struct {
	Domain        *string `json:"domain,omitempty"`
	HTTPCallCount *int32  `json:"httpCallCount,omitempty"`
}
