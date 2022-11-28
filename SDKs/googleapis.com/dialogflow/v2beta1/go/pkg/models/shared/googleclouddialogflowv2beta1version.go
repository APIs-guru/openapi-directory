package shared

type GoogleCloudDialogflowV2beta1VersionStatusEnum string

const (
	GoogleCloudDialogflowV2beta1VersionStatusEnumVersionStatusUnspecified GoogleCloudDialogflowV2beta1VersionStatusEnum = "VERSION_STATUS_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1VersionStatusEnumInProgress               GoogleCloudDialogflowV2beta1VersionStatusEnum = "IN_PROGRESS"
	GoogleCloudDialogflowV2beta1VersionStatusEnumReady                    GoogleCloudDialogflowV2beta1VersionStatusEnum = "READY"
	GoogleCloudDialogflowV2beta1VersionStatusEnumFailed                   GoogleCloudDialogflowV2beta1VersionStatusEnum = "FAILED"
)

// GoogleCloudDialogflowV2beta1Version
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2beta1Version struct {
	CreateTime    *string                                        `json:"createTime,omitempty"`
	Description   *string                                        `json:"description,omitempty"`
	Name          *string                                        `json:"name,omitempty"`
	Status        *GoogleCloudDialogflowV2beta1VersionStatusEnum `json:"status,omitempty"`
	VersionNumber *int32                                         `json:"versionNumber,omitempty"`
}

// GoogleCloudDialogflowV2beta1VersionInput
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2beta1VersionInput struct {
	Description *string `json:"description,omitempty"`
}
