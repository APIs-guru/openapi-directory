package shared

type BaseItemDtoQueryResult struct {
	Items            []BaseItemDto `json:"Items"`
	StartIndex       *int32        `json:"StartIndex"`
	TotalRecordCount *int32        `json:"TotalRecordCount"`
}
