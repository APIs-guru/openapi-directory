package shared

type UpdateEmbeddedObjectPositionRequest struct {
	Fields      *string                 `json:"fields"`
	NewPosition *EmbeddedObjectPosition `json:"newPosition"`
	ObjectID    *int32                  `json:"objectId"`
}
