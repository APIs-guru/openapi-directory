package shared



type RemoteImageInfo struct {
    CommunityRating *float64 `json:"CommunityRating,omitempty"`
    Height *int32 `json:"Height,omitempty"`
    Language *string `json:"Language,omitempty"`
    ProviderName *string `json:"ProviderName,omitempty"`
    RatingType *RatingTypeEnum `json:"RatingType,omitempty"`
    ThumbnailURL *string `json:"ThumbnailUrl,omitempty"`
    Type *ImageTypeEnum `json:"Type,omitempty"`
    URL *string `json:"Url,omitempty"`
    VoteCount *int32 `json:"VoteCount,omitempty"`
    Width *int32 `json:"Width,omitempty"`
    
}

