package shared

type QueryFiltersLegacy struct {
	Genres          []string `json:"Genres"`
	OfficialRatings []string `json:"OfficialRatings"`
	Tags            []string `json:"Tags"`
	Years           []int32  `json:"Years"`
}
