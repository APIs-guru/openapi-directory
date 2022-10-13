package shared

type CreateSlideRequest struct {
	InsertionIndex        *int32                       `json:"insertionIndex"`
	ObjectID              *string                      `json:"objectId"`
	PlaceholderIDMappings []LayoutPlaceholderIDMapping `json:"placeholderIdMappings"`
	SlideLayoutReference  *LayoutReference             `json:"slideLayoutReference"`
}
