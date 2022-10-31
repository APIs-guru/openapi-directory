package shared

type PlacementTag struct {
	PlacementID *string   `json:"placementId,omitempty"`
	TagDatas    []TagData `json:"tagDatas,omitempty"`
}
