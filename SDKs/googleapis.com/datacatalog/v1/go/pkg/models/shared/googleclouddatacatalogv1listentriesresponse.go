package shared



type GoogleCloudDatacatalogV1ListEntriesResponse struct {
    Entries []GoogleCloudDatacatalogV1Entry `json:"entries,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

