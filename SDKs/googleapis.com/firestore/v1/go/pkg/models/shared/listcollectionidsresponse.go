package shared



type ListCollectionIdsResponse struct {
    CollectionIds []string `json:"collectionIds,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

