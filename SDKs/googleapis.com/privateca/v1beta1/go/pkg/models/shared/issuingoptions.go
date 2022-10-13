package shared

type IssuingOptions struct {
	IncludeCaCertURL    *bool `json:"includeCaCertUrl"`
	IncludeCrlAccessURL *bool `json:"includeCrlAccessUrl"`
}
