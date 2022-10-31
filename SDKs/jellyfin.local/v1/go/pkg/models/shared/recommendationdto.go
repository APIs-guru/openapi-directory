package shared



type RecommendationDto struct {
    BaselineItemName *string `json:"BaselineItemName,omitempty"`
    CategoryID *string `json:"CategoryId,omitempty"`
    Items []BaseItemDto `json:"Items,omitempty"`
    RecommendationType *RecommendationTypeEnum `json:"RecommendationType,omitempty"`
    
}

