package shared

type PosListResponse struct {
	Kind      *string    `json:"kind"`
	Resources []PosStore `json:"resources"`
}
