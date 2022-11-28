package shared

// DeleteEmbeddedObjectRequest
// Deletes the embedded object with the given ID.
type DeleteEmbeddedObjectRequest struct {
	ObjectID *int32 `json:"objectId,omitempty"`
}
