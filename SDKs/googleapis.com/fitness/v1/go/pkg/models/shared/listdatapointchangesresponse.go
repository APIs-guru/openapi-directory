package shared

type ListDataPointChangesResponse struct {
	DataSourceID      *string     `json:"dataSourceId"`
	DeletedDataPoint  []DataPoint `json:"deletedDataPoint"`
	InsertedDataPoint []DataPoint `json:"insertedDataPoint"`
	NextPageToken     *string     `json:"nextPageToken"`
}
