package shared

// DeleteObjectRequest
// Deletes an object, either pages or page elements, from the presentation.
type DeleteObjectRequest struct {
	ObjectID *string `json:"objectId,omitempty"`
}
