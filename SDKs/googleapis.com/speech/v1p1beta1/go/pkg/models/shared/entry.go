package shared

// Entry
// A single replacement configuration.
type Entry struct {
	CaseSensitive *bool   `json:"caseSensitive,omitempty"`
	Replace       *string `json:"replace,omitempty"`
	Search        *string `json:"search,omitempty"`
}
