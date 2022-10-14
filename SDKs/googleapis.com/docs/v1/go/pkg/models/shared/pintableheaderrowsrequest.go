package shared

type PinTableHeaderRowsRequest struct {
	PinnedHeaderRowsCount *int32    `json:"pinnedHeaderRowsCount,omitempty"`
	TableStartLocation    *Location `json:"tableStartLocation,omitempty"`
}
