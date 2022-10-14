package shared

type PathFilter struct {
	Regexes []string `json:"regexes,omitempty"`
}
