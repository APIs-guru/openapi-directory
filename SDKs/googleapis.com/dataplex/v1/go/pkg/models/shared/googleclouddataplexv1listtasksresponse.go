package shared



type GoogleCloudDataplexV1ListTasksResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Tasks []GoogleCloudDataplexV1Task `json:"tasks,omitempty"`
    UnreachableLocations []string `json:"unreachableLocations,omitempty"`
    
}

