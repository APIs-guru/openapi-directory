package shared




type ProviderLaunchStageEnum string

const (
    ProviderLaunchStageEnumLaunchStageUnspecified ProviderLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
ProviderLaunchStageEnumPreview ProviderLaunchStageEnum = "PREVIEW"
ProviderLaunchStageEnumGa ProviderLaunchStageEnum = "GA"
ProviderLaunchStageEnumDeprecated ProviderLaunchStageEnum = "DEPRECATED"
)


type Provider struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    DocumentationURI *string `json:"documentationUri,omitempty"`
    ExternalURI *string `json:"externalUri,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LaunchStage *ProviderLaunchStageEnum `json:"launchStage,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    WebAssetsLocation *string `json:"webAssetsLocation,omitempty"`
    
}

