package shared

type SearchAnalyticsQueryRequest struct {
	AggregationType       *string                   `json:"aggregationType"`
	DataState             *string                   `json:"dataState"`
	DimensionFilterGroups []APIDimensionFilterGroup `json:"dimensionFilterGroups"`
	Dimensions            []string                  `json:"dimensions"`
	EndDate               *string                   `json:"endDate"`
	RowLimit              *int32                    `json:"rowLimit"`
	SearchType            *string                   `json:"searchType"`
	StartDate             *string                   `json:"startDate"`
	StartRow              *int32                    `json:"startRow"`
}
