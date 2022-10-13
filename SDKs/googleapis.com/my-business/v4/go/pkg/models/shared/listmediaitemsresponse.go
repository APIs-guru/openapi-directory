package shared

type ListMediaItemsResponse struct {
	MediaItems          []MediaItem `json:"mediaItems"`
	NextPageToken       *string     `json:"nextPageToken"`
	TotalMediaItemCount *int32      `json:"totalMediaItemCount"`
}
