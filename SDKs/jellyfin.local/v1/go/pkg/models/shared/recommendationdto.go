package shared

type RecommendationDto struct {
	BaselineItemName   *string                 `json:"BaselineItemName"`
	CategoryID         *string                 `json:"CategoryId"`
	Items              []BaseItemDto           `json:"Items"`
	RecommendationType *RecommendationTypeEnum `json:"RecommendationType"`
}
