package shared

type RecommendationTypeEnum string

const (
	RecommendationTypeEnumSimilarToRecentlyPlayed       RecommendationTypeEnum = "SimilarToRecentlyPlayed"
	RecommendationTypeEnumSimilarToLikedItem            RecommendationTypeEnum = "SimilarToLikedItem"
	RecommendationTypeEnumHasDirectorFromRecentlyPlayed RecommendationTypeEnum = "HasDirectorFromRecentlyPlayed"
	RecommendationTypeEnumHasActorFromRecentlyPlayed    RecommendationTypeEnum = "HasActorFromRecentlyPlayed"
	RecommendationTypeEnumHasLikedDirector              RecommendationTypeEnum = "HasLikedDirector"
	RecommendationTypeEnumHasLikedActor                 RecommendationTypeEnum = "HasLikedActor"
)
