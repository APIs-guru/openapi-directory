package shared

// GoogleCloudDocumentaiV1DocumentProvenanceParent
// The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
type GoogleCloudDocumentaiV1DocumentProvenanceParent struct {
	ID       *int32 `json:"id,omitempty"`
	Index    *int32 `json:"index,omitempty"`
	Revision *int32 `json:"revision,omitempty"`
}
