package shared

type OverallQualityResponse struct {
	DataQuality *int32  `json:"data_quality"`
	EndDate     *string `json:"end_date"`
	RowCount    *int32  `json:"row_count"`
	Sites       *string `json:"sites"`
	StartDate   *string `json:"start_date"`
}
