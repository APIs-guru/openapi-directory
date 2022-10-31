package shared



type SearchAnalyticsQueryRequest struct {
    AggregationType *string `json:"aggregationType,omitempty"`
    DataState *string `json:"dataState,omitempty"`
    DimensionFilterGroups []APIDimensionFilterGroup `json:"dimensionFilterGroups,omitempty"`
    Dimensions []string `json:"dimensions,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    RowLimit *int32 `json:"rowLimit,omitempty"`
    SearchType *string `json:"searchType,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    StartRow *int32 `json:"startRow,omitempty"`
    
}

