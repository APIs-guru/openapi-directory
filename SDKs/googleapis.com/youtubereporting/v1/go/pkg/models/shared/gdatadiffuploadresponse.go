package shared

// GdataDiffUploadResponse
// gdata
type GdataDiffUploadResponse struct {
	ObjectVersion  *string              `json:"objectVersion,omitempty"`
	OriginalObject *GdataCompositeMedia `json:"originalObject,omitempty"`
}
