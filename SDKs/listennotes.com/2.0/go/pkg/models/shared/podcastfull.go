package shared

type PodcastFull struct {
	Country               *string                 `json:"country"`
	Description           *string                 `json:"description"`
	EarliestPubDateMs     *int64                  `json:"earliest_pub_date_ms"`
	Email                 *string                 `json:"email"`
	Episodes              []EpisodeMinimum        `json:"episodes"`
	ExplicitContent       *bool                   `json:"explicit_content"`
	Extra                 *PodcastExtraField      `json:"extra"`
	GenreIds              []int64                 `json:"genre_ids"`
	ID                    *string                 `json:"id"`
	Image                 *string                 `json:"image"`
	IsClaimed             *bool                   `json:"is_claimed"`
	ItunesID              *int64                  `json:"itunes_id"`
	Language              *string                 `json:"language"`
	LatestPubDateMs       *int64                  `json:"latest_pub_date_ms"`
	ListenScore           *int64                  `json:"listen_score"`
	ListenScoreGlobalRank *string                 `json:"listen_score_global_rank"`
	ListennotesURL        *string                 `json:"listennotes_url"`
	LookingFor            *PodcastLookingForField `json:"looking_for"`
	NextEpisodePubDate    *int64                  `json:"next_episode_pub_date"`
	Publisher             *string                 `json:"publisher"`
	Rss                   *string                 `json:"rss"`
	Thumbnail             *string                 `json:"thumbnail"`
	Title                 *string                 `json:"title"`
	TotalEpisodes         *int64                  `json:"total_episodes"`
	Type                  *PodcastTypeFieldEnum   `json:"type"`
	Website               *string                 `json:"website"`
}
