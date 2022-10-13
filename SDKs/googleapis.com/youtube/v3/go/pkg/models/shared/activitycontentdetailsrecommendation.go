package shared

type ActivityContentDetailsRecommendationReasonEnum string

const (
	ActivityContentDetailsRecommendationReasonEnumReasonUnspecified ActivityContentDetailsRecommendationReasonEnum = "reasonUnspecified"
	ActivityContentDetailsRecommendationReasonEnumVideoFavorited    ActivityContentDetailsRecommendationReasonEnum = "videoFavorited"
	ActivityContentDetailsRecommendationReasonEnumVideoLiked        ActivityContentDetailsRecommendationReasonEnum = "videoLiked"
	ActivityContentDetailsRecommendationReasonEnumVideoWatched      ActivityContentDetailsRecommendationReasonEnum = "videoWatched"
)

type ActivityContentDetailsRecommendation struct {
	Reason         *ActivityContentDetailsRecommendationReasonEnum `json:"reason"`
	ResourceID     *ResourceID                                     `json:"resourceId"`
	SeedResourceID *ResourceID                                     `json:"seedResourceId"`
}
