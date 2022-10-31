package shared

type IndexItemRequestModeEnum string

const (
	IndexItemRequestModeEnumUnspecified  IndexItemRequestModeEnum = "UNSPECIFIED"
	IndexItemRequestModeEnumSynchronous  IndexItemRequestModeEnum = "SYNCHRONOUS"
	IndexItemRequestModeEnumAsynchronous IndexItemRequestModeEnum = "ASYNCHRONOUS"
)

type IndexItemRequest struct {
	ConnectorName    *string                   `json:"connectorName,omitempty"`
	DebugOptions     *DebugOptions             `json:"debugOptions,omitempty"`
	IndexItemOptions *IndexItemOptions         `json:"indexItemOptions,omitempty"`
	Item             *Item                     `json:"item,omitempty"`
	Mode             *IndexItemRequestModeEnum `json:"mode,omitempty"`
}
