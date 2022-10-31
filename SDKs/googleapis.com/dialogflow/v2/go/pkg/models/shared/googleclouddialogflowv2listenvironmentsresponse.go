package shared



type GoogleCloudDialogflowV2ListEnvironmentsResponse struct {
    Environments []GoogleCloudDialogflowV2Environment `json:"environments,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

