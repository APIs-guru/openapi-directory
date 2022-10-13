package shared

type PodcastMinimum struct {
	ID                    *string `json:"id"`
	Image                 *string `json:"image"`
	ListenScore           *int64  `json:"listen_score"`
	ListenScoreGlobalRank *string `json:"listen_score_global_rank"`
	ListennotesURL        *string `json:"listennotes_url"`
	Publisher             *string `json:"publisher"`
	Thumbnail             *string `json:"thumbnail"`
	Title                 *string `json:"title"`
}
