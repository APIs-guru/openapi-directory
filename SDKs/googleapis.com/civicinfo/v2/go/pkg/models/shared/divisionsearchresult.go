package shared

type DivisionSearchResult struct {
	Aliases []string `json:"aliases"`
	Name    *string  `json:"name"`
	OcdID   *string  `json:"ocdId"`
}
