package shared




type GoogleCloudDialogflowCxV3beta1VersionStateEnum string

const (
    GoogleCloudDialogflowCxV3beta1VersionStateEnumStateUnspecified GoogleCloudDialogflowCxV3beta1VersionStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDialogflowCxV3beta1VersionStateEnumRunning GoogleCloudDialogflowCxV3beta1VersionStateEnum = "RUNNING"
GoogleCloudDialogflowCxV3beta1VersionStateEnumSucceeded GoogleCloudDialogflowCxV3beta1VersionStateEnum = "SUCCEEDED"
GoogleCloudDialogflowCxV3beta1VersionStateEnumFailed GoogleCloudDialogflowCxV3beta1VersionStateEnum = "FAILED"
)


type GoogleCloudDialogflowCxV3beta1Version struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    NluSettings *GoogleCloudDialogflowCxV3beta1NluSettings `json:"nluSettings,omitempty"`
    State *GoogleCloudDialogflowCxV3beta1VersionStateEnum `json:"state,omitempty"`
    
}

