package shared

type GoogleCloudVisionV1p2beta1ProductSearchParams struct {
	BoundingPoly      *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingPoly"`
	Filter            *string                                 `json:"filter"`
	ProductCategories []string                                `json:"productCategories"`
	ProductSet        *string                                 `json:"productSet"`
}
