package shared



type ListDocumentsResponse struct {
    Documents []Document `json:"documents,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

