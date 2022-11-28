package shared

// GoogleCloudRetailV2SearchResponseFacetFacetValue
// A facet value which contains value names and their count.
type GoogleCloudRetailV2SearchResponseFacetFacetValue struct {
	Count    *string                      `json:"count,omitempty"`
	Interval *GoogleCloudRetailV2Interval `json:"interval,omitempty"`
	MaxValue *float64                     `json:"maxValue,omitempty"`
	MinValue *float64                     `json:"minValue,omitempty"`
	Value    *string                      `json:"value,omitempty"`
}
