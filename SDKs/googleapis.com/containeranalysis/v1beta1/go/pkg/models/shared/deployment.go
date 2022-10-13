package shared

type DeploymentPlatformEnum string

const (
	DeploymentPlatformEnumPlatformUnspecified DeploymentPlatformEnum = "PLATFORM_UNSPECIFIED"
	DeploymentPlatformEnumGke                 DeploymentPlatformEnum = "GKE"
	DeploymentPlatformEnumFlex                DeploymentPlatformEnum = "FLEX"
	DeploymentPlatformEnumCustom              DeploymentPlatformEnum = "CUSTOM"
)

type Deployment struct {
	Address      *string                 `json:"address"`
	Config       *string                 `json:"config"`
	DeployTime   *string                 `json:"deployTime"`
	Platform     *DeploymentPlatformEnum `json:"platform"`
	ResourceURI  []string                `json:"resourceUri"`
	UndeployTime *string                 `json:"undeployTime"`
	UserEmail    *string                 `json:"userEmail"`
}
