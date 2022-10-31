package shared




type ConnectorLaunchStageEnum string

const (
    ConnectorLaunchStageEnumLaunchStageUnspecified ConnectorLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
ConnectorLaunchStageEnumPreview ConnectorLaunchStageEnum = "PREVIEW"
ConnectorLaunchStageEnumGa ConnectorLaunchStageEnum = "GA"
ConnectorLaunchStageEnumDeprecated ConnectorLaunchStageEnum = "DEPRECATED"
)


type Connector struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    DocumentationURI *string `json:"documentationUri,omitempty"`
    ExternalURI *string `json:"externalUri,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LaunchStage *ConnectorLaunchStageEnum `json:"launchStage,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    WebAssetsLocation *string `json:"webAssetsLocation,omitempty"`
    
}

