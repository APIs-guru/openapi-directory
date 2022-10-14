package shared

type ListBeaconsResponse struct {
	Beacons       []Beacon `json:"beacons,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	TotalCount    *string  `json:"totalCount,omitempty"`
}
