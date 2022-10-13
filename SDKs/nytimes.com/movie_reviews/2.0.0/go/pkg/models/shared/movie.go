package shared

type MovieLink struct {
	SuggestedLinkText *string `json:"suggested_link_text"`
	Type              *string `json:"type"`
	URL               *string `json:"url"`
}

type MovieMultimediaResource struct {
	Height *int64  `json:"height"`
	Src    *string `json:"src"`
	Type   *string `json:"type"`
	Width  *int64  `json:"width"`
}

type MovieMultimedia struct {
	Resource *MovieMultimediaResource `json:"resource"`
}

type Movie struct {
	Byline          *string          `json:"byline"`
	CriticsPick     *int64           `json:"critics_pick"`
	DateUpdated     *string          `json:"date_updated"`
	DisplayTitle    *string          `json:"display_title"`
	Headline        *string          `json:"headline"`
	Link            *MovieLink       `json:"link"`
	MpaaRating      *string          `json:"mpaa_rating"`
	Multimedia      *MovieMultimedia `json:"multimedia"`
	OpeningDate     *string          `json:"opening_date"`
	PublicationDate *string          `json:"publication_date"`
	SummaryShort    *string          `json:"summary_short"`
}
