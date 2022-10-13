package shared

type SeriesTimerInfoDtoQueryResult struct {
	Items            []SeriesTimerInfoDto `json:"Items"`
	StartIndex       *int32               `json:"StartIndex"`
	TotalRecordCount *int32               `json:"TotalRecordCount"`
}
