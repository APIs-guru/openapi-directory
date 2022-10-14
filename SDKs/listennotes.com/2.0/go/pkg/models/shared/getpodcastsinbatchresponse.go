package shared

type GetPodcastsInBatchResponse struct {
	LatestEpisodes []EpisodeSimple `json:"latest_episodes,omitempty"`
	Podcasts       []PodcastSimple `json:"podcasts"`
}
