package shared

type Dataset struct {
	DataSourceID   *string     `json:"dataSourceId"`
	MaxEndTimeNs   *string     `json:"maxEndTimeNs"`
	MinStartTimeNs *string     `json:"minStartTimeNs"`
	NextPageToken  *string     `json:"nextPageToken"`
	Point          []DataPoint `json:"point"`
}
