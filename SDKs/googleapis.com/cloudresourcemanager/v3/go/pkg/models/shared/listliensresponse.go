package shared



type ListLiensResponse struct {
    Liens []Lien `json:"liens,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

