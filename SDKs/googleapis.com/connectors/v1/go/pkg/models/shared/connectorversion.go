package shared




type ConnectorVersionLaunchStageEnum string

const (
    ConnectorVersionLaunchStageEnumLaunchStageUnspecified ConnectorVersionLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
ConnectorVersionLaunchStageEnumPreview ConnectorVersionLaunchStageEnum = "PREVIEW"
ConnectorVersionLaunchStageEnumGa ConnectorVersionLaunchStageEnum = "GA"
ConnectorVersionLaunchStageEnumDeprecated ConnectorVersionLaunchStageEnum = "DEPRECATED"
)


type ConnectorVersion struct {
    AuthConfigTemplates []AuthConfigTemplate `json:"authConfigTemplates,omitempty"`
    ConfigVariableTemplates []ConfigVariableTemplate `json:"configVariableTemplates,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EgressControlConfig *EgressControlConfig `json:"egressControlConfig,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LaunchStage *ConnectorVersionLaunchStageEnum `json:"launchStage,omitempty"`
    Name *string `json:"name,omitempty"`
    ReleaseVersion *string `json:"releaseVersion,omitempty"`
    RoleGrant *RoleGrant `json:"roleGrant,omitempty"`
    RoleGrants []RoleGrant `json:"roleGrants,omitempty"`
    SupportedRuntimeFeatures *SupportedRuntimeFeatures `json:"supportedRuntimeFeatures,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

