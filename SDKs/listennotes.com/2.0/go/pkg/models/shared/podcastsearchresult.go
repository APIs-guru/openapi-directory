package shared

// PodcastSearchResult
// When **type** is *podcast*.
type PodcastSearchResult struct {
	DescriptionHighlighted *string `json:"description_highlighted,omitempty"`
	DescriptionOriginal    *string `json:"description_original,omitempty"`
	EarliestPubDateMs      *int64  `json:"earliest_pub_date_ms,omitempty"`
	Email                  *string `json:"email,omitempty"`
	ExplicitContent        *bool   `json:"explicit_content,omitempty"`
	GenreIds               []int64 `json:"genre_ids,omitempty"`
	ID                     *string `json:"id,omitempty"`
	Image                  *string `json:"image,omitempty"`
	ItunesID               *int64  `json:"itunes_id,omitempty"`
	LatestPubDateMs        *int64  `json:"latest_pub_date_ms,omitempty"`
	ListenScore            *int64  `json:"listen_score,omitempty"`
	ListenScoreGlobalRank  *string `json:"listen_score_global_rank,omitempty"`
	ListennotesURL         *string `json:"listennotes_url,omitempty"`
	PublisherHighlighted   *string `json:"publisher_highlighted,omitempty"`
	PublisherOriginal      *string `json:"publisher_original,omitempty"`
	Rss                    *string `json:"rss,omitempty"`
	Thumbnail              *string `json:"thumbnail,omitempty"`
	TitleHighlighted       *string `json:"title_highlighted,omitempty"`
	TitleOriginal          *string `json:"title_original,omitempty"`
	TotalEpisodes          *int64  `json:"total_episodes,omitempty"`
	Website                *string `json:"website,omitempty"`
}
