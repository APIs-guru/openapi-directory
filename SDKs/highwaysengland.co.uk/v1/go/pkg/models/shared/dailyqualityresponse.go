package shared

type DailyQualityResponse struct {
	Qualities []Qualities `json:"Qualities"`
	RowCount  *int32      `json:"row_count"`
}
