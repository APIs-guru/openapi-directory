package shared

type RestoreServiceRequestRestoreTypeEnum string

const (
	RestoreServiceRequestRestoreTypeEnumRestoreTypeUnspecified RestoreServiceRequestRestoreTypeEnum = "RESTORE_TYPE_UNSPECIFIED"
	RestoreServiceRequestRestoreTypeEnumFull                   RestoreServiceRequestRestoreTypeEnum = "FULL"
	RestoreServiceRequestRestoreTypeEnumMetadataOnly           RestoreServiceRequestRestoreTypeEnum = "METADATA_ONLY"
)

type RestoreServiceRequest struct {
	Backup      *string                               `json:"backup"`
	RequestID   *string                               `json:"requestId"`
	RestoreType *RestoreServiceRequestRestoreTypeEnum `json:"restoreType"`
}
