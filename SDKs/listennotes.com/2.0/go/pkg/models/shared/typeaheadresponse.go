package shared



type TypeaheadResponse struct {
    Genres []Genre `json:"genres,omitempty"`
    Podcasts []PodcastTypeaheadResult `json:"podcasts,omitempty"`
    Terms []string `json:"terms"`
    
}

