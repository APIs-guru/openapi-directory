package shared



type UpdateSlicerSpecRequest struct {
    Fields *string `json:"fields,omitempty"`
    SlicerID *int32 `json:"slicerId,omitempty"`
    Spec *SlicerSpec `json:"spec,omitempty"`
    
}

