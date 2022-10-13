package shared

type ListCustomerMediaItemsResponse struct {
	MediaItems          []MediaItem `json:"mediaItems"`
	NextPageToken       *string     `json:"nextPageToken"`
	TotalMediaItemCount *int32      `json:"totalMediaItemCount"`
}
