package shared

type StructMatcher struct {
	Path  []PathSegment `json:"path"`
	Value *ValueMatcher `json:"value"`
}
