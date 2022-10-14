package shared

type GroupedResult struct {
	BoundingPoly      *BoundingPoly      `json:"boundingPoly,omitempty"`
	ObjectAnnotations []ObjectAnnotation `json:"objectAnnotations,omitempty"`
	Results           []Result           `json:"results,omitempty"`
}
