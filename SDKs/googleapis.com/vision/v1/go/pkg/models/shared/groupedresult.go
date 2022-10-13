package shared

type GroupedResult struct {
	BoundingPoly      *BoundingPoly      `json:"boundingPoly"`
	ObjectAnnotations []ObjectAnnotation `json:"objectAnnotations"`
	Results           []Result           `json:"results"`
}
