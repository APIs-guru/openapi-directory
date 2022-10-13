package shared

type Entry struct {
	CaseSensitive *bool   `json:"caseSensitive"`
	Replace       *string `json:"replace"`
	Search        *string `json:"search"`
}
