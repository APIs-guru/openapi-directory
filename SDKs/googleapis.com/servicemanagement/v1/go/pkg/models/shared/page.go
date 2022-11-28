package shared

// Page
// Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
type Page struct {
	Content  *string `json:"content,omitempty"`
	Name     *string `json:"name,omitempty"`
	Subpages []Page  `json:"subpages,omitempty"`
}
