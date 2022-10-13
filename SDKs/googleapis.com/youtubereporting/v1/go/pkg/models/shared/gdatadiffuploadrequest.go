package shared

type GdataDiffUploadRequest struct {
	ChecksumsInfo *GdataCompositeMedia `json:"checksumsInfo"`
	ObjectInfo    *GdataCompositeMedia `json:"objectInfo"`
	ObjectVersion *string              `json:"objectVersion"`
}
