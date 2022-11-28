package shared

// ListCustomerMediaItemsResponse
// Response message for Media.ListCustomerMediaItems.
type ListCustomerMediaItemsResponse struct {
	MediaItems          []MediaItem `json:"mediaItems,omitempty"`
	NextPageToken       *string     `json:"nextPageToken,omitempty"`
	TotalMediaItemCount *int32      `json:"totalMediaItemCount,omitempty"`
}
