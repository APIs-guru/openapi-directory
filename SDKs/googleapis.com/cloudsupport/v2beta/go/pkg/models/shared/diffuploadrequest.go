package shared

type DiffUploadRequest struct {
	ChecksumsInfo *CompositeMedia `json:"checksumsInfo"`
	ObjectInfo    *CompositeMedia `json:"objectInfo"`
	ObjectVersion *string         `json:"objectVersion"`
}
