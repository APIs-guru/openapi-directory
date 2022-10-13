package shared

type GoogleCloudDialogflowV2VersionStatusEnum string

const (
	GoogleCloudDialogflowV2VersionStatusEnumVersionStatusUnspecified GoogleCloudDialogflowV2VersionStatusEnum = "VERSION_STATUS_UNSPECIFIED"
	GoogleCloudDialogflowV2VersionStatusEnumInProgress               GoogleCloudDialogflowV2VersionStatusEnum = "IN_PROGRESS"
	GoogleCloudDialogflowV2VersionStatusEnumReady                    GoogleCloudDialogflowV2VersionStatusEnum = "READY"
	GoogleCloudDialogflowV2VersionStatusEnumFailed                   GoogleCloudDialogflowV2VersionStatusEnum = "FAILED"
)

type GoogleCloudDialogflowV2Version struct {
	CreateTime    *string                                   `json:"createTime"`
	Description   *string                                   `json:"description"`
	Name          *string                                   `json:"name"`
	Status        *GoogleCloudDialogflowV2VersionStatusEnum `json:"status"`
	VersionNumber *int32                                    `json:"versionNumber"`
}
