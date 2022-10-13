package shared

type ProviderLaunchStageEnum string

const (
	ProviderLaunchStageEnumLaunchStageUnspecified ProviderLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	ProviderLaunchStageEnumPreview                ProviderLaunchStageEnum = "PREVIEW"
	ProviderLaunchStageEnumGa                     ProviderLaunchStageEnum = "GA"
	ProviderLaunchStageEnumDeprecated             ProviderLaunchStageEnum = "DEPRECATED"
)

type Provider struct {
	CreateTime        *string                  `json:"createTime"`
	Description       *string                  `json:"description"`
	DisplayName       *string                  `json:"displayName"`
	DocumentationURI  *string                  `json:"documentationUri"`
	ExternalURI       *string                  `json:"externalUri"`
	Labels            map[string]string        `json:"labels"`
	LaunchStage       *ProviderLaunchStageEnum `json:"launchStage"`
	Name              *string                  `json:"name"`
	UpdateTime        *string                  `json:"updateTime"`
	WebAssetsLocation *string                  `json:"webAssetsLocation"`
}
