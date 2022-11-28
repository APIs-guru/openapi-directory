package shared

// PinTableHeaderRowsRequest
// Updates the number of pinned table header rows in a table.
type PinTableHeaderRowsRequest struct {
	PinnedHeaderRowsCount *int32    `json:"pinnedHeaderRowsCount,omitempty"`
	TableStartLocation    *Location `json:"tableStartLocation,omitempty"`
}
