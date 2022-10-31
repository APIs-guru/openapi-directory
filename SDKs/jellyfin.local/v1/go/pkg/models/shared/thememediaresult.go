package shared



type ThemeMediaResult struct {
    Items []BaseItemDto `json:"Items,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    StartIndex *int32 `json:"StartIndex,omitempty"`
    TotalRecordCount *int32 `json:"TotalRecordCount,omitempty"`
    
}

