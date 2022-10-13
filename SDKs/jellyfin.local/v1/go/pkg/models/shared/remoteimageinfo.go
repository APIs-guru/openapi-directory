package shared

type RemoteImageInfo struct {
	CommunityRating *float64        `json:"CommunityRating"`
	Height          *int32          `json:"Height"`
	Language        *string         `json:"Language"`
	ProviderName    *string         `json:"ProviderName"`
	RatingType      *RatingTypeEnum `json:"RatingType"`
	ThumbnailURL    *string         `json:"ThumbnailUrl"`
	Type            *ImageTypeEnum  `json:"Type"`
	URL             *string         `json:"Url"`
	VoteCount       *int32          `json:"VoteCount"`
	Width           *int32          `json:"Width"`
}
