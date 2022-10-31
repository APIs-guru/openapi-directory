package shared



type SearchItemsByViewURLResponse struct {
    Items []Item `json:"items,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

