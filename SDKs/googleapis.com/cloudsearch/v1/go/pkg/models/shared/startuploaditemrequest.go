package shared

// StartUploadItemRequest
// Start upload file request.
type StartUploadItemRequest struct {
	ConnectorName *string       `json:"connectorName,omitempty"`
	DebugOptions  *DebugOptions `json:"debugOptions,omitempty"`
}
