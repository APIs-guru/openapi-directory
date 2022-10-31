package shared



type ListCollectionStatusesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []CollectionStatus `json:"resources,omitempty"`
    
}

