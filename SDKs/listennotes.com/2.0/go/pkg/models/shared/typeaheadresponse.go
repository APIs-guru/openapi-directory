package shared

type TypeaheadResponse struct {
	Genres   []Genre                  `json:"genres"`
	Podcasts []PodcastTypeaheadResult `json:"podcasts"`
	Terms    []string                 `json:"terms"`
}
