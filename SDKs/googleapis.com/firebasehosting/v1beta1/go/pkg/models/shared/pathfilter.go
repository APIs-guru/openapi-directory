package shared

// PathFilter
// A representation of filter path.
type PathFilter struct {
	Regexes []string `json:"regexes,omitempty"`
}
