package shared

type ListLocationsResponse struct {
	Locations     []Location `json:"locations"`
	NextPageToken *string    `json:"nextPageToken"`
	TotalSize     *int32     `json:"totalSize"`
}
