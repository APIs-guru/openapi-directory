package shared

type PlacementsListResponse struct {
	Kind          *string     `json:"kind,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Placements    []Placement `json:"placements,omitempty"`
}
