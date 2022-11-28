package shared

type GoogleCloudDialogflowV2VersionStatusEnum string

const (
	GoogleCloudDialogflowV2VersionStatusEnumVersionStatusUnspecified GoogleCloudDialogflowV2VersionStatusEnum = "VERSION_STATUS_UNSPECIFIED"
	GoogleCloudDialogflowV2VersionStatusEnumInProgress               GoogleCloudDialogflowV2VersionStatusEnum = "IN_PROGRESS"
	GoogleCloudDialogflowV2VersionStatusEnumReady                    GoogleCloudDialogflowV2VersionStatusEnum = "READY"
	GoogleCloudDialogflowV2VersionStatusEnumFailed                   GoogleCloudDialogflowV2VersionStatusEnum = "FAILED"
)

// GoogleCloudDialogflowV2VersionInput
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2VersionInput struct {
	Description *string `json:"description,omitempty"`
}

// GoogleCloudDialogflowV2Version
// You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
type GoogleCloudDialogflowV2Version struct {
	CreateTime    *string                                   `json:"createTime,omitempty"`
	Description   *string                                   `json:"description,omitempty"`
	Name          *string                                   `json:"name,omitempty"`
	Status        *GoogleCloudDialogflowV2VersionStatusEnum `json:"status,omitempty"`
	VersionNumber *int32                                    `json:"versionNumber,omitempty"`
}
