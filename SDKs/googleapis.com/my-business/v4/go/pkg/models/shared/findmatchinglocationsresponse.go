package shared

// FindMatchingLocationsResponse
// Response message for Locations.FindMatchingLocations.
type FindMatchingLocationsResponse struct {
	MatchTime        *string           `json:"matchTime,omitempty"`
	MatchedLocations []MatchedLocation `json:"matchedLocations,omitempty"`
}
