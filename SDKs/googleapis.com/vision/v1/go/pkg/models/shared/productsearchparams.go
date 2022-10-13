package shared

type ProductSearchParams struct {
	BoundingPoly      *BoundingPoly `json:"boundingPoly"`
	Filter            *string       `json:"filter"`
	ProductCategories []string      `json:"productCategories"`
	ProductSet        *string       `json:"productSet"`
}
