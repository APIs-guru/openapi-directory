package shared

type UpdateSlidesPositionRequest struct {
	InsertionIndex *int32   `json:"insertionIndex,omitempty"`
	SlideObjectIds []string `json:"slideObjectIds,omitempty"`
}
