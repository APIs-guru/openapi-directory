package shared

// GroupedResult
// Information about the products similar to a single product in a query image.
type GroupedResult struct {
	BoundingPoly      *BoundingPoly      `json:"boundingPoly,omitempty"`
	ObjectAnnotations []ObjectAnnotation `json:"objectAnnotations,omitempty"`
	Results           []Result           `json:"results,omitempty"`
}
