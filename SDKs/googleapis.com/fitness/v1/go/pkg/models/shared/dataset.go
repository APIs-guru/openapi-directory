package shared



type Dataset struct {
    DataSourceID *string `json:"dataSourceId,omitempty"`
    MaxEndTimeNs *string `json:"maxEndTimeNs,omitempty"`
    MinStartTimeNs *string `json:"minStartTimeNs,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Point []DataPoint `json:"point,omitempty"`
    
}

