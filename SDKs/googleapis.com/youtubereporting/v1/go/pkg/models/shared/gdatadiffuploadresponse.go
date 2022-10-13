package shared

type GdataDiffUploadResponse struct {
	ObjectVersion  *string              `json:"objectVersion"`
	OriginalObject *GdataCompositeMedia `json:"originalObject"`
}
