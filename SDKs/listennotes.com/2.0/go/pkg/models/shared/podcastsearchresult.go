package shared

type PodcastSearchResult struct {
	DescriptionHighlighted *string `json:"description_highlighted"`
	DescriptionOriginal    *string `json:"description_original"`
	EarliestPubDateMs      *int64  `json:"earliest_pub_date_ms"`
	Email                  *string `json:"email"`
	ExplicitContent        *bool   `json:"explicit_content"`
	GenreIds               []int64 `json:"genre_ids"`
	ID                     *string `json:"id"`
	Image                  *string `json:"image"`
	ItunesID               *int64  `json:"itunes_id"`
	LatestPubDateMs        *int64  `json:"latest_pub_date_ms"`
	ListenScore            *int64  `json:"listen_score"`
	ListenScoreGlobalRank  *string `json:"listen_score_global_rank"`
	ListennotesURL         *string `json:"listennotes_url"`
	PublisherHighlighted   *string `json:"publisher_highlighted"`
	PublisherOriginal      *string `json:"publisher_original"`
	Rss                    *string `json:"rss"`
	Thumbnail              *string `json:"thumbnail"`
	TitleHighlighted       *string `json:"title_highlighted"`
	TitleOriginal          *string `json:"title_original"`
	TotalEpisodes          *int64  `json:"total_episodes"`
	Website                *string `json:"website"`
}
