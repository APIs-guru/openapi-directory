package shared

// GoogleCloudRetailV2alphaSearchResponseFacetFacetValue
// A facet value which contains value names and their count.
type GoogleCloudRetailV2alphaSearchResponseFacetFacetValue struct {
	Count    *string                           `json:"count,omitempty"`
	Interval *GoogleCloudRetailV2alphaInterval `json:"interval,omitempty"`
	MaxValue *float64                          `json:"maxValue,omitempty"`
	MinValue *float64                          `json:"minValue,omitempty"`
	Value    *string                           `json:"value,omitempty"`
}
