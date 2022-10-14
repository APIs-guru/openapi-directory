package shared

type ListLocationsResponse struct {
	Locations     []Location `json:"locations,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	TotalSize     *int32     `json:"totalSize,omitempty"`
}
