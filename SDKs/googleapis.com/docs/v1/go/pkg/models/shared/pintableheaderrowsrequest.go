package shared

type PinTableHeaderRowsRequest struct {
	PinnedHeaderRowsCount *int32    `json:"pinnedHeaderRowsCount"`
	TableStartLocation    *Location `json:"tableStartLocation"`
}
