package shared

type QueryFilters struct {
	Genres []NameGUIDPair `json:"Genres"`
	Tags   []string       `json:"Tags"`
}
