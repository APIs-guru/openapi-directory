package shared

// UpdateShapePropertiesRequest
// Update the properties of a Shape.
type UpdateShapePropertiesRequest struct {
	Fields          *string          `json:"fields,omitempty"`
	ObjectID        *string          `json:"objectId,omitempty"`
	ShapeProperties *ShapeProperties `json:"shapeProperties,omitempty"`
}
