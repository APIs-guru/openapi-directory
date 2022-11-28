package shared

// Category
// The category to which the update belongs.
type Category struct {
	CategoryID *string `json:"categoryId,omitempty"`
	Name       *string `json:"name,omitempty"`
}
