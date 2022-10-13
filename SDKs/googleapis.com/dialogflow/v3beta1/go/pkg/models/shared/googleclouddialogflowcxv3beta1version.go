package shared

type GoogleCloudDialogflowCxV3beta1VersionStateEnum string

const (
	GoogleCloudDialogflowCxV3beta1VersionStateEnumStateUnspecified GoogleCloudDialogflowCxV3beta1VersionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1VersionStateEnumRunning          GoogleCloudDialogflowCxV3beta1VersionStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3beta1VersionStateEnumSucceeded        GoogleCloudDialogflowCxV3beta1VersionStateEnum = "SUCCEEDED"
	GoogleCloudDialogflowCxV3beta1VersionStateEnumFailed           GoogleCloudDialogflowCxV3beta1VersionStateEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3beta1Version struct {
	CreateTime  *string                                         `json:"createTime"`
	Description *string                                         `json:"description"`
	DisplayName *string                                         `json:"displayName"`
	Name        *string                                         `json:"name"`
	NluSettings *GoogleCloudDialogflowCxV3beta1NluSettings      `json:"nluSettings"`
	State       *GoogleCloudDialogflowCxV3beta1VersionStateEnum `json:"state"`
}
