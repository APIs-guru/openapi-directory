package shared

type DailyQualityResponse struct {
	Qualities []Qualities `json:"Qualities,omitempty"`
	RowCount  *int32      `json:"row_count,omitempty"`
}
