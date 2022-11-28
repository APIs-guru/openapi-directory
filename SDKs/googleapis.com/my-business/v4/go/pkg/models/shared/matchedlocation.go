package shared

// MatchedLocation
// Represents a possible match to a location.
type MatchedLocation struct {
	IsExactMatch *bool     `json:"isExactMatch,omitempty"`
	Location     *Location `json:"location,omitempty"`
}
