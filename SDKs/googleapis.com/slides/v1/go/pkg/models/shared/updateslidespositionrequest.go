package shared

type UpdateSlidesPositionRequest struct {
	InsertionIndex *int32   `json:"insertionIndex"`
	SlideObjectIds []string `json:"slideObjectIds"`
}
