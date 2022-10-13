package shared

type DeleteQueueItemsRequest struct {
	ConnectorName *string       `json:"connectorName"`
	DebugOptions  *DebugOptions `json:"debugOptions"`
	Queue         *string       `json:"queue"`
}
