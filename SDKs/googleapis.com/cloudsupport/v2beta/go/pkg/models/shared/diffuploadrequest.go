package shared

// DiffUploadRequest
// # gdata.* are outside protos with mising documentation
type DiffUploadRequest struct {
	ChecksumsInfo *CompositeMedia `json:"checksumsInfo,omitempty"`
	ObjectInfo    *CompositeMedia `json:"objectInfo,omitempty"`
	ObjectVersion *string         `json:"objectVersion,omitempty"`
}
