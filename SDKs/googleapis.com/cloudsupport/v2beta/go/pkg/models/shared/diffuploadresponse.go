package shared

// DiffUploadResponse
// # gdata.* are outside protos with mising documentation
type DiffUploadResponse struct {
	ObjectVersion  *string         `json:"objectVersion,omitempty"`
	OriginalObject *CompositeMedia `json:"originalObject,omitempty"`
}
