package shared



type MovieLink struct {
    SuggestedLinkText *string `json:"suggested_link_text,omitempty"`
    Type *string `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type MovieMultimediaResource struct {
    Height *int64 `json:"height,omitempty"`
    Src *string `json:"src,omitempty"`
    Type *string `json:"type,omitempty"`
    Width *int64 `json:"width,omitempty"`
    
}

type MovieMultimedia struct {
    Resource *MovieMultimediaResource `json:"resource,omitempty"`
    
}

type Movie struct {
    Byline *string `json:"byline,omitempty"`
    CriticsPick *int64 `json:"critics_pick,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    DisplayTitle *string `json:"display_title,omitempty"`
    Headline *string `json:"headline,omitempty"`
    Link *MovieLink `json:"link,omitempty"`
    MpaaRating *string `json:"mpaa_rating,omitempty"`
    Multimedia *MovieMultimedia `json:"multimedia,omitempty"`
    OpeningDate *string `json:"opening_date,omitempty"`
    PublicationDate *string `json:"publication_date,omitempty"`
    SummaryShort *string `json:"summary_short,omitempty"`
    
}

