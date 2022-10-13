package shared

type GoogleCloudRetailV2betaSearchResponseFacetFacetValue struct {
	Count    *string                          `json:"count"`
	Interval *GoogleCloudRetailV2betaInterval `json:"interval"`
	MaxValue *float64                         `json:"maxValue"`
	MinValue *float64                         `json:"minValue"`
	Value    *string                          `json:"value"`
}
