package shared

type DiffUploadResponse struct {
	ObjectVersion  *string         `json:"objectVersion,omitempty"`
	OriginalObject *CompositeMedia `json:"originalObject,omitempty"`
}
