package shared



type ListPhotosResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Photos []Photo `json:"photos,omitempty"`
    
}

