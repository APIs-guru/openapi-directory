package shared

type GetPodcastRecommendationsResponse struct {
	Recommendations []PodcastSimple `json:"recommendations"`
}
