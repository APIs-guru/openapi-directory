package shared

type FindMatchingLocationsResponse struct {
	MatchTime        *string           `json:"matchTime"`
	MatchedLocations []MatchedLocation `json:"matchedLocations"`
}
