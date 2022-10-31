package shared



type GoogleCloudMlV1ListVersionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Versions []GoogleCloudMlV1Version `json:"versions,omitempty"`
    
}

