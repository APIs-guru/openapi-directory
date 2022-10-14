package shared

type ListMediaItemsResponse struct {
	MediaItems          []MediaItem `json:"mediaItems,omitempty"`
	NextPageToken       *string     `json:"nextPageToken,omitempty"`
	TotalMediaItemCount *int32      `json:"totalMediaItemCount,omitempty"`
}
