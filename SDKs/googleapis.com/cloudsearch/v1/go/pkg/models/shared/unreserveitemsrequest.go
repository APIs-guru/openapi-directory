package shared

type UnreserveItemsRequest struct {
	ConnectorName *string       `json:"connectorName"`
	DebugOptions  *DebugOptions `json:"debugOptions"`
	Queue         *string       `json:"queue"`
}
