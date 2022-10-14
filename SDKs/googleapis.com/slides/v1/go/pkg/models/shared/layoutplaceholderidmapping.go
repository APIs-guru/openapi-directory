package shared

type LayoutPlaceholderIDMapping struct {
	LayoutPlaceholder         *Placeholder `json:"layoutPlaceholder,omitempty"`
	LayoutPlaceholderObjectID *string      `json:"layoutPlaceholderObjectId,omitempty"`
	ObjectID                  *string      `json:"objectId,omitempty"`
}
