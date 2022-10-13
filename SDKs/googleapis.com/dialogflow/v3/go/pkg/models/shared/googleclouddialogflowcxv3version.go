package shared

type GoogleCloudDialogflowCxV3VersionStateEnum string

const (
	GoogleCloudDialogflowCxV3VersionStateEnumStateUnspecified GoogleCloudDialogflowCxV3VersionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3VersionStateEnumRunning          GoogleCloudDialogflowCxV3VersionStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3VersionStateEnumSucceeded        GoogleCloudDialogflowCxV3VersionStateEnum = "SUCCEEDED"
	GoogleCloudDialogflowCxV3VersionStateEnumFailed           GoogleCloudDialogflowCxV3VersionStateEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3Version struct {
	CreateTime  *string                                    `json:"createTime"`
	Description *string                                    `json:"description"`
	DisplayName *string                                    `json:"displayName"`
	Name        *string                                    `json:"name"`
	NluSettings *GoogleCloudDialogflowCxV3NluSettings      `json:"nluSettings"`
	State       *GoogleCloudDialogflowCxV3VersionStateEnum `json:"state"`
}
