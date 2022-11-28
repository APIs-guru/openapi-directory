package shared

// Slicer
// A slicer in a sheet.
type Slicer struct {
	Position *EmbeddedObjectPosition `json:"position,omitempty"`
	SlicerID *int32                  `json:"slicerId,omitempty"`
	Spec     *SlicerSpec             `json:"spec,omitempty"`
}
