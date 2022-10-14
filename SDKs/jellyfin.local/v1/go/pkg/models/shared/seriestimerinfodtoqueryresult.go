package shared

type SeriesTimerInfoDtoQueryResult struct {
	Items            []SeriesTimerInfoDto `json:"Items,omitempty"`
	StartIndex       *int32               `json:"StartIndex,omitempty"`
	TotalRecordCount *int32               `json:"TotalRecordCount,omitempty"`
}
