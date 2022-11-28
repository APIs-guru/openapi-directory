package shared

// CustomAttribute
// Custom attribute values that are either filterable or non-filterable.
type CustomAttribute struct {
	Filterable   *bool    `json:"filterable,omitempty"`
	LongValues   []string `json:"longValues,omitempty"`
	StringValues []string `json:"stringValues,omitempty"`
}
