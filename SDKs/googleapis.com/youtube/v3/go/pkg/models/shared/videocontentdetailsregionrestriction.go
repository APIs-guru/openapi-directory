package shared

type VideoContentDetailsRegionRestriction struct {
	Allowed []string `json:"allowed"`
	Blocked []string `json:"blocked"`
}
