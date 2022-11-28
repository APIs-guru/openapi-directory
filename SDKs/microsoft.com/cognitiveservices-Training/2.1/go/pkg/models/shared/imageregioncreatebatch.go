package shared

// ImageRegionCreateBatch
// Batch of image region information to create.
type ImageRegionCreateBatch struct {
	Regions []ImageRegionCreateEntry `json:"regions,omitempty"`
}
