package shared

// UpdateImagePropertiesRequest
// Update the properties of an Image.
type UpdateImagePropertiesRequest struct {
	Fields          *string          `json:"fields,omitempty"`
	ImageProperties *ImageProperties `json:"imageProperties,omitempty"`
	ObjectID        *string          `json:"objectId,omitempty"`
}
