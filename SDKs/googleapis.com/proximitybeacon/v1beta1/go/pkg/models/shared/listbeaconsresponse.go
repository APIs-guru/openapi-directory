package shared

type ListBeaconsResponse struct {
	Beacons       []Beacon `json:"beacons"`
	NextPageToken *string  `json:"nextPageToken"`
	TotalCount    *string  `json:"totalCount"`
}
