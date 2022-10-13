package shared

type DiffUploadResponse struct {
	ObjectVersion  *string         `json:"objectVersion"`
	OriginalObject *CompositeMedia `json:"originalObject"`
}
