package shared

type GetEpisodeRecommendationsResponse struct {
	Recommendations []EpisodeSimple `json:"recommendations"`
}
