package shared

type DatafeedTarget struct {
	Country              *string  `json:"country"`
	ExcludedDestinations []string `json:"excludedDestinations"`
	IncludedDestinations []string `json:"includedDestinations"`
	Language             *string  `json:"language"`
}
