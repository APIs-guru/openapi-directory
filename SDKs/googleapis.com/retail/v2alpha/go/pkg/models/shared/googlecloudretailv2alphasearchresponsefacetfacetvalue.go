package shared

type GoogleCloudRetailV2alphaSearchResponseFacetFacetValue struct {
	Count    *string                           `json:"count"`
	Interval *GoogleCloudRetailV2alphaInterval `json:"interval"`
	MaxValue *float64                          `json:"maxValue"`
	MinValue *float64                          `json:"minValue"`
	Value    *string                           `json:"value"`
}
