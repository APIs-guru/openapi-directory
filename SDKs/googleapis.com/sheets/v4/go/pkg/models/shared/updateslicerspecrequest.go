package shared

type UpdateSlicerSpecRequest struct {
	Fields   *string     `json:"fields"`
	SlicerID *int32      `json:"slicerId"`
	Spec     *SlicerSpec `json:"spec"`
}
