package shared

type ReturnpolicyListResponse struct {
	Kind      *string        `json:"kind,omitempty"`
	Resources []ReturnPolicy `json:"resources,omitempty"`
}
