package shared

// ListStepThumbnailsResponse
// A response containing the thumbnails in a step.
type ListStepThumbnailsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Thumbnails    []Image `json:"thumbnails,omitempty"`
}
