package shared




type DeploymentOccurrencePlatformEnum string

const (
    DeploymentOccurrencePlatformEnumPlatformUnspecified DeploymentOccurrencePlatformEnum = "PLATFORM_UNSPECIFIED"
DeploymentOccurrencePlatformEnumGke DeploymentOccurrencePlatformEnum = "GKE"
DeploymentOccurrencePlatformEnumFlex DeploymentOccurrencePlatformEnum = "FLEX"
DeploymentOccurrencePlatformEnumCustom DeploymentOccurrencePlatformEnum = "CUSTOM"
)


type DeploymentOccurrence struct {
    Address *string `json:"address,omitempty"`
    Config *string `json:"config,omitempty"`
    DeployTime *string `json:"deployTime,omitempty"`
    Platform *DeploymentOccurrencePlatformEnum `json:"platform,omitempty"`
    ResourceURI []string `json:"resourceUri,omitempty"`
    UndeployTime *string `json:"undeployTime,omitempty"`
    UserEmail *string `json:"userEmail,omitempty"`
    
}

