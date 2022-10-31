package shared



type UpdateShapePropertiesRequest struct {
    Fields *string `json:"fields,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    ShapeProperties *ShapeProperties `json:"shapeProperties,omitempty"`
    
}

