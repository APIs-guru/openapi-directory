package shared

// RefreshRuntimeTokenInternalRequest
// Request for getting a new access token.
type RefreshRuntimeTokenInternalRequest struct {
	VMID *string `json:"vmId,omitempty"`
}
