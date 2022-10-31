package shared

type UpdateEmbeddedObjectPositionRequest struct {
	Fields      *string                 `json:"fields,omitempty"`
	NewPosition *EmbeddedObjectPosition `json:"newPosition,omitempty"`
	ObjectID    *int32                  `json:"objectId,omitempty"`
}
