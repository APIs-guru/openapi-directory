package shared



type UpdateImagePropertiesRequest struct {
    Fields *string `json:"fields,omitempty"`
    ImageProperties *ImageProperties `json:"imageProperties,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    
}

