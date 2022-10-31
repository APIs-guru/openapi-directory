package shared



type GoogleCloudDialogflowV2ListVersionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Versions []GoogleCloudDialogflowV2Version `json:"versions,omitempty"`
    
}

