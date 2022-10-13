package shared

type DeploymentOccurrencePlatformEnum string

const (
	DeploymentOccurrencePlatformEnumPlatformUnspecified DeploymentOccurrencePlatformEnum = "PLATFORM_UNSPECIFIED"
	DeploymentOccurrencePlatformEnumGke                 DeploymentOccurrencePlatformEnum = "GKE"
	DeploymentOccurrencePlatformEnumFlex                DeploymentOccurrencePlatformEnum = "FLEX"
	DeploymentOccurrencePlatformEnumCustom              DeploymentOccurrencePlatformEnum = "CUSTOM"
)

type DeploymentOccurrence struct {
	Address      *string                           `json:"address"`
	Config       *string                           `json:"config"`
	DeployTime   *string                           `json:"deployTime"`
	Platform     *DeploymentOccurrencePlatformEnum `json:"platform"`
	ResourceURI  []string                          `json:"resourceUri"`
	UndeployTime *string                           `json:"undeployTime"`
	UserEmail    *string                           `json:"userEmail"`
}
