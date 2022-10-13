package shared

type QueryTimeSeriesRequest struct {
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
	Query     *string `json:"query"`
}
