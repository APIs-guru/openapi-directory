package shared

type ConnectorVersionLaunchStageEnum string

const (
	ConnectorVersionLaunchStageEnumLaunchStageUnspecified ConnectorVersionLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	ConnectorVersionLaunchStageEnumPreview                ConnectorVersionLaunchStageEnum = "PREVIEW"
	ConnectorVersionLaunchStageEnumGa                     ConnectorVersionLaunchStageEnum = "GA"
	ConnectorVersionLaunchStageEnumDeprecated             ConnectorVersionLaunchStageEnum = "DEPRECATED"
)

type ConnectorVersion struct {
	AuthConfigTemplates      []AuthConfigTemplate             `json:"authConfigTemplates"`
	ConfigVariableTemplates  []ConfigVariableTemplate         `json:"configVariableTemplates"`
	CreateTime               *string                          `json:"createTime"`
	DisplayName              *string                          `json:"displayName"`
	EgressControlConfig      *EgressControlConfig             `json:"egressControlConfig"`
	Labels                   map[string]string                `json:"labels"`
	LaunchStage              *ConnectorVersionLaunchStageEnum `json:"launchStage"`
	Name                     *string                          `json:"name"`
	ReleaseVersion           *string                          `json:"releaseVersion"`
	RoleGrant                *RoleGrant                       `json:"roleGrant"`
	RoleGrants               []RoleGrant                      `json:"roleGrants"`
	SupportedRuntimeFeatures *SupportedRuntimeFeatures        `json:"supportedRuntimeFeatures"`
	UpdateTime               *string                          `json:"updateTime"`
}
