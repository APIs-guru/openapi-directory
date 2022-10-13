package shared

type PlacementTag struct {
	PlacementID *string   `json:"placementId"`
	TagDatas    []TagData `json:"tagDatas"`
}
