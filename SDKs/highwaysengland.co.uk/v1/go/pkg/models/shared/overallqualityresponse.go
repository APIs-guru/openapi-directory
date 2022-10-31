package shared



type OverallQualityResponse struct {
    DataQuality *int32 `json:"data_quality,omitempty"`
    EndDate *string `json:"end_date,omitempty"`
    RowCount *int32 `json:"row_count,omitempty"`
    Sites *string `json:"sites,omitempty"`
    StartDate *string `json:"start_date,omitempty"`
    
}

