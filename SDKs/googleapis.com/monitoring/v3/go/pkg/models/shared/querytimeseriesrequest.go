package shared



type QueryTimeSeriesRequest struct {
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    Query *string `json:"query,omitempty"`
    
}

