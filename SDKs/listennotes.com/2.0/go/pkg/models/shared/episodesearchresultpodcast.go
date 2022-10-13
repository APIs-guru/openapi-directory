package shared

type EpisodeSearchResultPodcast struct {
	GenreIds              []int64 `json:"genre_ids"`
	ID                    *string `json:"id"`
	Image                 *string `json:"image"`
	ListenScore           *int64  `json:"listen_score"`
	ListenScoreGlobalRank *string `json:"listen_score_global_rank"`
	ListennotesURL        *string `json:"listennotes_url"`
	PublisherHighlighted  *string `json:"publisher_highlighted"`
	PublisherOriginal     *string `json:"publisher_original"`
	Thumbnail             *string `json:"thumbnail"`
	TitleHighlighted      *string `json:"title_highlighted"`
	TitleOriginal         *string `json:"title_original"`
}
