package shared



type StageExecutionDetails struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Workers []WorkerDetails `json:"workers,omitempty"`
    
}

