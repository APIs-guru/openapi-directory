package shared

// IPFiltering
// The filtering configuration block for a service of globally.
type IPFiltering struct {
	Blacklist []string `json:"blacklist"`
	Whitelist []string `json:"whitelist"`
}
