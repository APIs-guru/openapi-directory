package shared

type GoogleCloudRetailV2betaSearchResponseFacetFacetValue struct {
	Count    *string                          `json:"count,omitempty"`
	Interval *GoogleCloudRetailV2betaInterval `json:"interval,omitempty"`
	MaxValue *float64                         `json:"maxValue,omitempty"`
	MinValue *float64                         `json:"minValue,omitempty"`
	Value    *string                          `json:"value,omitempty"`
}
