package shared

// Group
// A PageElement kind representing a joined collection of PageElements.
type Group struct {
	Children []PageElement `json:"children,omitempty"`
}
