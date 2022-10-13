package shared

type GetPodcastsInBatchResponse struct {
	LatestEpisodes []EpisodeSimple `json:"latest_episodes"`
	Podcasts       []PodcastSimple `json:"podcasts"`
}
