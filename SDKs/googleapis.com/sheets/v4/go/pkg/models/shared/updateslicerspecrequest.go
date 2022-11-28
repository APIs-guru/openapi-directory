package shared

// UpdateSlicerSpecRequest
// Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
type UpdateSlicerSpecRequest struct {
	Fields   *string     `json:"fields,omitempty"`
	SlicerID *int32      `json:"slicerId,omitempty"`
	Spec     *SlicerSpec `json:"spec,omitempty"`
}
