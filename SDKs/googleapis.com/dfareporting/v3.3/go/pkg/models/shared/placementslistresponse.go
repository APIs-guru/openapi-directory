package shared

type PlacementsListResponse struct {
	Kind          *string     `json:"kind"`
	NextPageToken *string     `json:"nextPageToken"`
	Placements    []Placement `json:"placements"`
}
