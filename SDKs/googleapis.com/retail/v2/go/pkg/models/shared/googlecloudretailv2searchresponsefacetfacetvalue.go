package shared

type GoogleCloudRetailV2SearchResponseFacetFacetValue struct {
	Count    *string                      `json:"count"`
	Interval *GoogleCloudRetailV2Interval `json:"interval"`
	MaxValue *float64                     `json:"maxValue"`
	MinValue *float64                     `json:"minValue"`
	Value    *string                      `json:"value"`
}
