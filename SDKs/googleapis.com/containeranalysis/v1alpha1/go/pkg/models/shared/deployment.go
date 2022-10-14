package shared

type DeploymentPlatformEnum string

const (
	DeploymentPlatformEnumPlatformUnspecified DeploymentPlatformEnum = "PLATFORM_UNSPECIFIED"
	DeploymentPlatformEnumGke                 DeploymentPlatformEnum = "GKE"
	DeploymentPlatformEnumFlex                DeploymentPlatformEnum = "FLEX"
	DeploymentPlatformEnumCustom              DeploymentPlatformEnum = "CUSTOM"
)

type Deployment struct {
	Address      *string                 `json:"address,omitempty"`
	Config       *string                 `json:"config,omitempty"`
	DeployTime   *string                 `json:"deployTime,omitempty"`
	Platform     *DeploymentPlatformEnum `json:"platform,omitempty"`
	ResourceURI  []string                `json:"resourceUri,omitempty"`
	UndeployTime *string                 `json:"undeployTime,omitempty"`
	UserEmail    *string                 `json:"userEmail,omitempty"`
}
