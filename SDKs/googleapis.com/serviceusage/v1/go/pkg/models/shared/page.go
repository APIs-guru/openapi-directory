package shared

type Page struct {
	Content  *string `json:"content,omitempty"`
	Name     *string `json:"name,omitempty"`
	Subpages []Page  `json:"subpages,omitempty"`
}
