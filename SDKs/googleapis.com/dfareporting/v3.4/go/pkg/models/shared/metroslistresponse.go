package shared

type MetrosListResponse struct {
	Kind   *string `json:"kind"`
	Metros []Metro `json:"metros"`
}
