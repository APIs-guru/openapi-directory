package shared




type RestoreServiceRequestRestoreTypeEnum string

const (
    RestoreServiceRequestRestoreTypeEnumRestoreTypeUnspecified RestoreServiceRequestRestoreTypeEnum = "RESTORE_TYPE_UNSPECIFIED"
RestoreServiceRequestRestoreTypeEnumFull RestoreServiceRequestRestoreTypeEnum = "FULL"
RestoreServiceRequestRestoreTypeEnumMetadataOnly RestoreServiceRequestRestoreTypeEnum = "METADATA_ONLY"
)


type RestoreServiceRequest struct {
    Backup *string `json:"backup,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    RestoreType *RestoreServiceRequestRestoreTypeEnum `json:"restoreType,omitempty"`
    
}

