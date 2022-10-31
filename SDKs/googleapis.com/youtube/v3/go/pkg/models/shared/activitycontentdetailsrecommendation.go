package shared




type ActivityContentDetailsRecommendationReasonEnum string

const (
    ActivityContentDetailsRecommendationReasonEnumReasonUnspecified ActivityContentDetailsRecommendationReasonEnum = "reasonUnspecified"
ActivityContentDetailsRecommendationReasonEnumVideoFavorited ActivityContentDetailsRecommendationReasonEnum = "videoFavorited"
ActivityContentDetailsRecommendationReasonEnumVideoLiked ActivityContentDetailsRecommendationReasonEnum = "videoLiked"
ActivityContentDetailsRecommendationReasonEnumVideoWatched ActivityContentDetailsRecommendationReasonEnum = "videoWatched"
)


type ActivityContentDetailsRecommendation struct {
    Reason *ActivityContentDetailsRecommendationReasonEnum `json:"reason,omitempty"`
    ResourceID *ResourceID `json:"resourceId,omitempty"`
    SeedResourceID *ResourceID `json:"seedResourceId,omitempty"`
    
}

