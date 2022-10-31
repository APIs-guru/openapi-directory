package shared



type UpdateLinePropertiesRequest struct {
    Fields *string `json:"fields,omitempty"`
    LineProperties *LineProperties `json:"lineProperties,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    
}

