package shared



type GoogleCloudRunV2ListExecutionsResponse struct {
    Executions []GoogleCloudRunV2Execution `json:"executions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

