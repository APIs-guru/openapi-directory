package shared

type ListStepThumbnailsResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Thumbnails    []Image `json:"thumbnails"`
}
