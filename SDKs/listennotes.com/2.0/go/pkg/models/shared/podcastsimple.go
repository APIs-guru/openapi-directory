package shared

type PodcastSimple struct {
	Country               *string                 `json:"country,omitempty"`
	Description           *string                 `json:"description,omitempty"`
	EarliestPubDateMs     *int64                  `json:"earliest_pub_date_ms,omitempty"`
	Email                 *string                 `json:"email,omitempty"`
	ExplicitContent       *bool                   `json:"explicit_content,omitempty"`
	Extra                 *PodcastExtraField      `json:"extra,omitempty"`
	GenreIds              []int64                 `json:"genre_ids,omitempty"`
	ID                    *string                 `json:"id,omitempty"`
	Image                 *string                 `json:"image,omitempty"`
	IsClaimed             *bool                   `json:"is_claimed,omitempty"`
	ItunesID              *int64                  `json:"itunes_id,omitempty"`
	Language              *string                 `json:"language,omitempty"`
	LatestPubDateMs       *int64                  `json:"latest_pub_date_ms,omitempty"`
	ListenScore           *int64                  `json:"listen_score,omitempty"`
	ListenScoreGlobalRank *string                 `json:"listen_score_global_rank,omitempty"`
	ListennotesURL        *string                 `json:"listennotes_url,omitempty"`
	LookingFor            *PodcastLookingForField `json:"looking_for,omitempty"`
	Publisher             *string                 `json:"publisher,omitempty"`
	Rss                   *string                 `json:"rss,omitempty"`
	Thumbnail             *string                 `json:"thumbnail,omitempty"`
	Title                 *string                 `json:"title,omitempty"`
	TotalEpisodes         *int64                  `json:"total_episodes,omitempty"`
	Type                  *PodcastTypeFieldEnum   `json:"type,omitempty"`
	Website               *string                 `json:"website,omitempty"`
}
