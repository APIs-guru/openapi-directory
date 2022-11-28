package shared

// ProductSearchParams
// Parameters for a product search request.
type ProductSearchParams struct {
	BoundingPoly      *BoundingPoly `json:"boundingPoly,omitempty"`
	Filter            *string       `json:"filter,omitempty"`
	ProductCategories []string      `json:"productCategories,omitempty"`
	ProductSet        *string       `json:"productSet,omitempty"`
}
