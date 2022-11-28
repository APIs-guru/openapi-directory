package shared

type GoogleCloudDialogflowCxV3VersionStateEnum string

const (
	GoogleCloudDialogflowCxV3VersionStateEnumStateUnspecified GoogleCloudDialogflowCxV3VersionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3VersionStateEnumRunning          GoogleCloudDialogflowCxV3VersionStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3VersionStateEnumSucceeded        GoogleCloudDialogflowCxV3VersionStateEnum = "SUCCEEDED"
	GoogleCloudDialogflowCxV3VersionStateEnumFailed           GoogleCloudDialogflowCxV3VersionStateEnum = "FAILED"
)

// GoogleCloudDialogflowCxV3Version
// Represents a version of a flow.
type GoogleCloudDialogflowCxV3Version struct {
	CreateTime  *string                                    `json:"createTime,omitempty"`
	Description *string                                    `json:"description,omitempty"`
	DisplayName *string                                    `json:"displayName,omitempty"`
	Name        *string                                    `json:"name,omitempty"`
	NluSettings *GoogleCloudDialogflowCxV3NluSettings      `json:"nluSettings,omitempty"`
	State       *GoogleCloudDialogflowCxV3VersionStateEnum `json:"state,omitempty"`
}

// GoogleCloudDialogflowCxV3VersionInput
// Represents a version of a flow.
type GoogleCloudDialogflowCxV3VersionInput struct {
	Description *string                               `json:"description,omitempty"`
	DisplayName *string                               `json:"displayName,omitempty"`
	Name        *string                               `json:"name,omitempty"`
	NluSettings *GoogleCloudDialogflowCxV3NluSettings `json:"nluSettings,omitempty"`
}
