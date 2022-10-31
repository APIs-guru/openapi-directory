package shared



type ListEntitiesResponse struct {
    Entities []Entity `json:"entities,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

