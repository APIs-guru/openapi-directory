package shared

type TimerInfoDtoQueryResult struct {
	Items            []TimerInfoDto `json:"Items,omitempty"`
	StartIndex       *int32         `json:"StartIndex,omitempty"`
	TotalRecordCount *int32         `json:"TotalRecordCount,omitempty"`
}
