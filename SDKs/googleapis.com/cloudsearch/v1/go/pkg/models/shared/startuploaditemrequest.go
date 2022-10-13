package shared

type StartUploadItemRequest struct {
	ConnectorName *string       `json:"connectorName"`
	DebugOptions  *DebugOptions `json:"debugOptions"`
}
