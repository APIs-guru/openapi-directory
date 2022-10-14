package shared

type BaseItemDtoQueryResult struct {
	Items            []BaseItemDto `json:"Items,omitempty"`
	StartIndex       *int32        `json:"StartIndex,omitempty"`
	TotalRecordCount *int32        `json:"TotalRecordCount,omitempty"`
}
