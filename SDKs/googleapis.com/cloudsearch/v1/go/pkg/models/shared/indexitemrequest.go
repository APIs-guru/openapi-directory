package shared

type IndexItemRequestModeEnum string

const (
	IndexItemRequestModeEnumUnspecified  IndexItemRequestModeEnum = "UNSPECIFIED"
	IndexItemRequestModeEnumSynchronous  IndexItemRequestModeEnum = "SYNCHRONOUS"
	IndexItemRequestModeEnumAsynchronous IndexItemRequestModeEnum = "ASYNCHRONOUS"
)

type IndexItemRequest struct {
	ConnectorName    *string                   `json:"connectorName"`
	DebugOptions     *DebugOptions             `json:"debugOptions"`
	IndexItemOptions *IndexItemOptions         `json:"indexItemOptions"`
	Item             *Item                     `json:"item"`
	Mode             *IndexItemRequestModeEnum `json:"mode"`
}
