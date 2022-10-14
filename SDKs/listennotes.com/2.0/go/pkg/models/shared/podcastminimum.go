package shared

type PodcastMinimum struct {
	ID                    *string `json:"id,omitempty"`
	Image                 *string `json:"image,omitempty"`
	ListenScore           *int64  `json:"listen_score,omitempty"`
	ListenScoreGlobalRank *string `json:"listen_score_global_rank,omitempty"`
	ListennotesURL        *string `json:"listennotes_url,omitempty"`
	Publisher             *string `json:"publisher,omitempty"`
	Thumbnail             *string `json:"thumbnail,omitempty"`
	Title                 *string `json:"title,omitempty"`
}
