package shared

// LayoutPlaceholderIDMapping
// The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.
type LayoutPlaceholderIDMapping struct {
	LayoutPlaceholder         *Placeholder `json:"layoutPlaceholder,omitempty"`
	LayoutPlaceholderObjectID *string      `json:"layoutPlaceholderObjectId,omitempty"`
	ObjectID                  *string      `json:"objectId,omitempty"`
}
