package shared

type GoogleMapsPlayablelocationsV3SampleFilter struct {
	IncludedTypes    []string                                           `json:"includedTypes,omitempty"`
	MaxLocationCount *int32                                             `json:"maxLocationCount,omitempty"`
	Spacing          *GoogleMapsPlayablelocationsV3SampleSpacingOptions `json:"spacing,omitempty"`
}
