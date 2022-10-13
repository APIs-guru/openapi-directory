package shared

type IPFiltering struct {
	Blacklist []string `json:"blacklist"`
	Whitelist []string `json:"whitelist"`
}
