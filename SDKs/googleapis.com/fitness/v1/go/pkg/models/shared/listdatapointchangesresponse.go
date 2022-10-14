package shared

type ListDataPointChangesResponse struct {
	DataSourceID      *string     `json:"dataSourceId,omitempty"`
	DeletedDataPoint  []DataPoint `json:"deletedDataPoint,omitempty"`
	InsertedDataPoint []DataPoint `json:"insertedDataPoint,omitempty"`
	NextPageToken     *string     `json:"nextPageToken,omitempty"`
}
