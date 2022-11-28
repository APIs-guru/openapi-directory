package shared

// GcRule
// Rule for determining which cells to delete during garbage collection.
type GcRule struct {
	Intersection   *Intersection `json:"intersection,omitempty"`
	MaxAge         *string       `json:"maxAge,omitempty"`
	MaxNumVersions *int32        `json:"maxNumVersions,omitempty"`
	Union          *Union        `json:"union,omitempty"`
}
