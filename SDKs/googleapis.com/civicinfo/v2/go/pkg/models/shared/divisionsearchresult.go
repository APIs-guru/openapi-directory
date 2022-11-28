package shared

// DivisionSearchResult
// Represents a political geographic division that matches the requested query.
type DivisionSearchResult struct {
	Aliases []string `json:"aliases,omitempty"`
	Name    *string  `json:"name,omitempty"`
	OcdID   *string  `json:"ocdId,omitempty"`
}
