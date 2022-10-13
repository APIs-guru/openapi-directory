package shared

type EnvironmentTypeEnum string

const (
	EnvironmentTypeEnumUser   EnvironmentTypeEnum = "user"
	EnvironmentTypeEnumLive   EnvironmentTypeEnum = "live"
	EnvironmentTypeEnumLatest EnvironmentTypeEnum = "latest"
	EnvironmentTypeEnumDraft  EnvironmentTypeEnum = "draft"
)

type Environment struct {
	AccountID                *string              `json:"accountId"`
	AuthorizationCode        *string              `json:"authorizationCode"`
	AuthorizationTimestampMs *string              `json:"authorizationTimestampMs"`
	ContainerID              *string              `json:"containerId"`
	ContainerVersionID       *string              `json:"containerVersionId"`
	Description              *string              `json:"description"`
	EnableDebug              *bool                `json:"enableDebug"`
	EnvironmentID            *string              `json:"environmentId"`
	Fingerprint              *string              `json:"fingerprint"`
	Name                     *string              `json:"name"`
	Type                     *EnvironmentTypeEnum `json:"type"`
	URL                      *string              `json:"url"`
}
