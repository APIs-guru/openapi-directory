package shared

// GetDebugConfigResponse
// Response to a get debug configuration request.
type GetDebugConfigResponse struct {
	Config *string `json:"config,omitempty"`
}
