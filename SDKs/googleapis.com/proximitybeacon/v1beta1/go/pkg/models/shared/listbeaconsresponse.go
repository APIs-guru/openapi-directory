package shared

// ListBeaconsResponse
// Response that contains list beacon results and pagination help.
type ListBeaconsResponse struct {
	Beacons       []Beacon `json:"beacons,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	TotalCount    *string  `json:"totalCount,omitempty"`
}
