package shared

// Intersection
// A GcRule which deletes cells matching all of the given rules.
type Intersection struct {
	Rules []GcRule `json:"rules,omitempty"`
}
