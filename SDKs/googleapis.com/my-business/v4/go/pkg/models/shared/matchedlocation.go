package shared

type MatchedLocation struct {
	IsExactMatch *bool     `json:"isExactMatch"`
	Location     *Location `json:"location"`
}
