package shared

// Metadata
// A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
type Metadata struct {
	FingerPrint *string        `json:"fingerPrint,omitempty"`
	Items       []MetadataItem `json:"items,omitempty"`
}
