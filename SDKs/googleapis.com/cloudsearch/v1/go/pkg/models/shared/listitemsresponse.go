package shared



type ListItemsResponse struct {
    Items []Item `json:"items,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

