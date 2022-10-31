package shared



type ListStepThumbnailsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Thumbnails []Image `json:"thumbnails,omitempty"`
    
}

