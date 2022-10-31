package shared



type GdataDiffUploadRequest struct {
    ChecksumsInfo *GdataCompositeMedia `json:"checksumsInfo,omitempty"`
    ObjectInfo *GdataCompositeMedia `json:"objectInfo,omitempty"`
    ObjectVersion *string `json:"objectVersion,omitempty"`
    
}

