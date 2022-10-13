package shared

type Slicer struct {
	Position *EmbeddedObjectPosition `json:"position"`
	SlicerID *int32                  `json:"slicerId"`
	Spec     *SlicerSpec             `json:"spec"`
}
