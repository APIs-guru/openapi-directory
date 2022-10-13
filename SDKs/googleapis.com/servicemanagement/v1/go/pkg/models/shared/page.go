package shared

type Page struct {
	Content  *string `json:"content"`
	Name     *string `json:"name"`
	Subpages []Page  `json:"subpages"`
}
