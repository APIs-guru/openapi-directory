package shared

type FindMatchingLocationsResponse struct {
	MatchTime        *string           `json:"matchTime,omitempty"`
	MatchedLocations []MatchedLocation `json:"matchedLocations,omitempty"`
}
