package shared

// CreateImageRequest
// Creates an image.
type CreateImageRequest struct {
	ElementProperties *PageElementProperties `json:"elementProperties,omitempty"`
	ObjectID          *string                `json:"objectId,omitempty"`
	URL               *string                `json:"url,omitempty"`
}
