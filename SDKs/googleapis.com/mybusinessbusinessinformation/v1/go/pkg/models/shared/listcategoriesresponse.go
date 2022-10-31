package shared



type ListCategoriesResponse struct {
    Categories []Category `json:"categories,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

