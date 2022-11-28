package shared

// UpdateSlidesPositionRequest
// Updates the position of slides in the presentation.
type UpdateSlidesPositionRequest struct {
	InsertionIndex *int32   `json:"insertionIndex,omitempty"`
	SlideObjectIds []string `json:"slideObjectIds,omitempty"`
}
