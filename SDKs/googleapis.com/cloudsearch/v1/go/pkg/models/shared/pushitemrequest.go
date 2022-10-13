package shared

type PushItemRequest struct {
	ConnectorName *string       `json:"connectorName"`
	DebugOptions  *DebugOptions `json:"debugOptions"`
	Item          *PushItem     `json:"item"`
}
