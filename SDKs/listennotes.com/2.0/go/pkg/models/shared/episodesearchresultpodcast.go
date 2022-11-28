package shared

// EpisodeSearchResultPodcast
// The podcast that this episode belongs to.
type EpisodeSearchResultPodcast struct {
	GenreIds              []int64 `json:"genre_ids,omitempty"`
	ID                    *string `json:"id,omitempty"`
	Image                 *string `json:"image,omitempty"`
	ListenScore           *int64  `json:"listen_score,omitempty"`
	ListenScoreGlobalRank *string `json:"listen_score_global_rank,omitempty"`
	ListennotesURL        *string `json:"listennotes_url,omitempty"`
	PublisherHighlighted  *string `json:"publisher_highlighted,omitempty"`
	PublisherOriginal     *string `json:"publisher_original,omitempty"`
	Thumbnail             *string `json:"thumbnail,omitempty"`
	TitleHighlighted      *string `json:"title_highlighted,omitempty"`
	TitleOriginal         *string `json:"title_original,omitempty"`
}
