package shared



type GoogleCloudVisionV1p2beta1ProductSearchParams struct {
    BoundingPoly *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingPoly,omitempty"`
    Filter *string `json:"filter,omitempty"`
    ProductCategories []string `json:"productCategories,omitempty"`
    ProductSet *string `json:"productSet,omitempty"`
    
}

