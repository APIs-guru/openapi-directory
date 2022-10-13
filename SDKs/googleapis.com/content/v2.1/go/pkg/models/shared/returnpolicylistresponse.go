package shared

type ReturnpolicyListResponse struct {
	Kind      *string        `json:"kind"`
	Resources []ReturnPolicy `json:"resources"`
}
