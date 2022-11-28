package shared

// ListMediaItemsResponse
// Response message for Media.ListMediaItems.
type ListMediaItemsResponse struct {
	MediaItems          []MediaItem `json:"mediaItems,omitempty"`
	NextPageToken       *string     `json:"nextPageToken,omitempty"`
	TotalMediaItemCount *int32      `json:"totalMediaItemCount,omitempty"`
}
