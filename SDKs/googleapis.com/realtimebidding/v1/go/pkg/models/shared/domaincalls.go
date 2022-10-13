package shared

type DomainCalls struct {
	Domain        *string `json:"domain"`
	HTTPCallCount *int32  `json:"httpCallCount"`
}
