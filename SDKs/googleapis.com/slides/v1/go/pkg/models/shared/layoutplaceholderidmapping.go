package shared

type LayoutPlaceholderIDMapping struct {
	LayoutPlaceholder         *Placeholder `json:"layoutPlaceholder"`
	LayoutPlaceholderObjectID *string      `json:"layoutPlaceholderObjectId"`
	ObjectID                  *string      `json:"objectId"`
}
