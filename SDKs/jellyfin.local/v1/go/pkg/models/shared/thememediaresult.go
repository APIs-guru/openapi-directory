package shared

type ThemeMediaResult struct {
	Items            []BaseItemDto `json:"Items"`
	OwnerID          *string       `json:"OwnerId"`
	StartIndex       *int32        `json:"StartIndex"`
	TotalRecordCount *int32        `json:"TotalRecordCount"`
}
