package shared

type GoogleCloudDialogflowV2beta1VersionStatusEnum string

const (
	GoogleCloudDialogflowV2beta1VersionStatusEnumVersionStatusUnspecified GoogleCloudDialogflowV2beta1VersionStatusEnum = "VERSION_STATUS_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1VersionStatusEnumInProgress               GoogleCloudDialogflowV2beta1VersionStatusEnum = "IN_PROGRESS"
	GoogleCloudDialogflowV2beta1VersionStatusEnumReady                    GoogleCloudDialogflowV2beta1VersionStatusEnum = "READY"
	GoogleCloudDialogflowV2beta1VersionStatusEnumFailed                   GoogleCloudDialogflowV2beta1VersionStatusEnum = "FAILED"
)

type GoogleCloudDialogflowV2beta1Version struct {
	CreateTime    *string                                        `json:"createTime"`
	Description   *string                                        `json:"description"`
	Name          *string                                        `json:"name"`
	Status        *GoogleCloudDialogflowV2beta1VersionStatusEnum `json:"status"`
	VersionNumber *int32                                         `json:"versionNumber"`
}
