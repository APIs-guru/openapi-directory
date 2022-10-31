package shared

type GoogleCloudDialogflowV2VersionStatusEnum string

const (
	GoogleCloudDialogflowV2VersionStatusEnumVersionStatusUnspecified GoogleCloudDialogflowV2VersionStatusEnum = "VERSION_STATUS_UNSPECIFIED"
	GoogleCloudDialogflowV2VersionStatusEnumInProgress               GoogleCloudDialogflowV2VersionStatusEnum = "IN_PROGRESS"
	GoogleCloudDialogflowV2VersionStatusEnumReady                    GoogleCloudDialogflowV2VersionStatusEnum = "READY"
	GoogleCloudDialogflowV2VersionStatusEnumFailed                   GoogleCloudDialogflowV2VersionStatusEnum = "FAILED"
)

type GoogleCloudDialogflowV2Version struct {
	CreateTime    *string                                   `json:"createTime,omitempty"`
	Description   *string                                   `json:"description,omitempty"`
	Name          *string                                   `json:"name,omitempty"`
	Status        *GoogleCloudDialogflowV2VersionStatusEnum `json:"status,omitempty"`
	VersionNumber *int32                                    `json:"versionNumber,omitempty"`
}
