package shared

type TimerInfoDtoQueryResult struct {
	Items            []TimerInfoDto `json:"Items"`
	StartIndex       *int32         `json:"StartIndex"`
	TotalRecordCount *int32         `json:"TotalRecordCount"`
}
