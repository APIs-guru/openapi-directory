package shared



type UpdateSlidePropertiesRequest struct {
    Fields *string `json:"fields,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    SlideProperties *SlideProperties `json:"slideProperties,omitempty"`
    
}

