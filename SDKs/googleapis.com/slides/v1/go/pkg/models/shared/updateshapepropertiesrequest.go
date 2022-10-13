package shared

type UpdateShapePropertiesRequest struct {
	Fields          *string          `json:"fields"`
	ObjectID        *string          `json:"objectId"`
	ShapeProperties *ShapeProperties `json:"shapeProperties"`
}
