package shared

// CreateSlideRequest
// Creates a slide.
type CreateSlideRequest struct {
	InsertionIndex        *int32                       `json:"insertionIndex,omitempty"`
	ObjectID              *string                      `json:"objectId,omitempty"`
	PlaceholderIDMappings []LayoutPlaceholderIDMapping `json:"placeholderIdMappings,omitempty"`
	SlideLayoutReference  *LayoutReference             `json:"slideLayoutReference,omitempty"`
}
