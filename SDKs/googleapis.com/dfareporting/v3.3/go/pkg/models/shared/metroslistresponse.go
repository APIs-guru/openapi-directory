package shared

// MetrosListResponse
// Metro List Response
type MetrosListResponse struct {
	Kind   *string `json:"kind,omitempty"`
	Metros []Metro `json:"metros,omitempty"`
}
