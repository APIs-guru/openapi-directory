package shared

type CreateTimeSeriesSummary struct {
	Errors            []Error `json:"errors"`
	SuccessPointCount *int32  `json:"successPointCount"`
	TotalPointCount   *int32  `json:"totalPointCount"`
}
