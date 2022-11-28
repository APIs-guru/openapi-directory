package shared

// ListHotTabletsResponse
// Response message for BigtableInstanceAdmin.ListHotTablets.
type ListHotTabletsResponse struct {
	HotTablets    []HotTablet `json:"hotTablets,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
