package shared

// Compliance
// Contains compliance information about a security standard indicating unmet recommendations.
type Compliance struct {
	Ids      []string `json:"ids,omitempty"`
	Standard *string  `json:"standard,omitempty"`
	Version  *string  `json:"version,omitempty"`
}
