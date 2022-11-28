package shared

// UpdateEmbeddedObjectPositionRequest
// Update an embedded object's position (such as a moving or resizing a chart or image).
type UpdateEmbeddedObjectPositionRequest struct {
	Fields      *string                 `json:"fields,omitempty"`
	NewPosition *EmbeddedObjectPosition `json:"newPosition,omitempty"`
	ObjectID    *int32                  `json:"objectId,omitempty"`
}
