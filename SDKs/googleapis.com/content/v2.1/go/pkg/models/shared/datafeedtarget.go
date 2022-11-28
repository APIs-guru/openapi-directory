package shared

type DatafeedTarget struct {
	Country              *string  `json:"country,omitempty"`
	ExcludedDestinations []string `json:"excludedDestinations,omitempty"`
	FeedLabel            *string  `json:"feedLabel,omitempty"`
	IncludedDestinations []string `json:"includedDestinations,omitempty"`
	Language             *string  `json:"language,omitempty"`
	TargetCountries      []string `json:"targetCountries,omitempty"`
}
