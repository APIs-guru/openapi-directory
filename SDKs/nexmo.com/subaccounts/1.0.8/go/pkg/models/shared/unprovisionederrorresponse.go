package shared

// UnprovisionedErrorResponse
// Unprovisioned
type UnprovisionedErrorResponse struct {
	Detail   string `json:"detail"`
	Instance string `json:"instance"`
	Title    string `json:"title"`
	Type     string `json:"type"`
}
