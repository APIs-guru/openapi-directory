package shared

// GoogleCloudVisionV1p1beta1ProductSearchParams
// Parameters for a product search request.
type GoogleCloudVisionV1p1beta1ProductSearchParams struct {
	BoundingPoly      *GoogleCloudVisionV1p1beta1BoundingPoly `json:"boundingPoly,omitempty"`
	Filter            *string                                 `json:"filter,omitempty"`
	ProductCategories []string                                `json:"productCategories,omitempty"`
	ProductSet        *string                                 `json:"productSet,omitempty"`
}
