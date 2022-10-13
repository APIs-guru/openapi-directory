package shared

type EnvironmentTypeEnum string

const (
	EnvironmentTypeEnumUser      EnvironmentTypeEnum = "user"
	EnvironmentTypeEnumLive      EnvironmentTypeEnum = "live"
	EnvironmentTypeEnumLatest    EnvironmentTypeEnum = "latest"
	EnvironmentTypeEnumWorkspace EnvironmentTypeEnum = "workspace"
)

type Environment struct {
	AccountID              *string              `json:"accountId"`
	AuthorizationCode      *string              `json:"authorizationCode"`
	AuthorizationTimestamp *string              `json:"authorizationTimestamp"`
	ContainerID            *string              `json:"containerId"`
	ContainerVersionID     *string              `json:"containerVersionId"`
	Description            *string              `json:"description"`
	EnableDebug            *bool                `json:"enableDebug"`
	EnvironmentID          *string              `json:"environmentId"`
	Fingerprint            *string              `json:"fingerprint"`
	Name                   *string              `json:"name"`
	Path                   *string              `json:"path"`
	TagManagerURL          *string              `json:"tagManagerUrl"`
	Type                   *EnvironmentTypeEnum `json:"type"`
	URL                    *string              `json:"url"`
	WorkspaceID            *string              `json:"workspaceId"`
}
