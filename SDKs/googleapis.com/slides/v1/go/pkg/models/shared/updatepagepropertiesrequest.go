package shared



type UpdatePagePropertiesRequest struct {
    Fields *string `json:"fields,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    PageProperties *PageProperties `json:"pageProperties,omitempty"`
    
}

