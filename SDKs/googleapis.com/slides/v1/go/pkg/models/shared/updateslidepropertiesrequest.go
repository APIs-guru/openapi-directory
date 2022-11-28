package shared

// UpdateSlidePropertiesRequest
// Updates the properties of a Slide.
type UpdateSlidePropertiesRequest struct {
	Fields          *string          `json:"fields,omitempty"`
	ObjectID        *string          `json:"objectId,omitempty"`
	SlideProperties *SlideProperties `json:"slideProperties,omitempty"`
}
