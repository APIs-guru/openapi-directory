package shared

type MatchedLocation struct {
	IsExactMatch *bool     `json:"isExactMatch,omitempty"`
	Location     *Location `json:"location,omitempty"`
}
