package shared

type GoogleMapsPlayablelocationsV3SampleFilter struct {
	IncludedTypes    []string                                           `json:"includedTypes"`
	MaxLocationCount *int32                                             `json:"maxLocationCount"`
	Spacing          *GoogleMapsPlayablelocationsV3SampleSpacingOptions `json:"spacing"`
}
