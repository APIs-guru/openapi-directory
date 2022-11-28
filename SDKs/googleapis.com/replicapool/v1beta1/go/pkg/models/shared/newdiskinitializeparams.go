package shared

// NewDiskInitializeParams
// Initialization parameters for creating a new disk.
type NewDiskInitializeParams struct {
	DiskSizeGb  *string `json:"diskSizeGb,omitempty"`
	DiskType    *string `json:"diskType,omitempty"`
	SourceImage *string `json:"sourceImage,omitempty"`
}
