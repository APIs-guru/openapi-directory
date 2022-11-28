package shared

// Dataset
// A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
type Dataset struct {
	DataSourceID   *string     `json:"dataSourceId,omitempty"`
	MaxEndTimeNs   *string     `json:"maxEndTimeNs,omitempty"`
	MinStartTimeNs *string     `json:"minStartTimeNs,omitempty"`
	NextPageToken  *string     `json:"nextPageToken,omitempty"`
	Point          []DataPoint `json:"point,omitempty"`
}
