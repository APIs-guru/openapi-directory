package shared

type ConnectorLaunchStageEnum string

const (
	ConnectorLaunchStageEnumLaunchStageUnspecified ConnectorLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	ConnectorLaunchStageEnumPreview                ConnectorLaunchStageEnum = "PREVIEW"
	ConnectorLaunchStageEnumGa                     ConnectorLaunchStageEnum = "GA"
	ConnectorLaunchStageEnumDeprecated             ConnectorLaunchStageEnum = "DEPRECATED"
)

type Connector struct {
	CreateTime        *string                   `json:"createTime"`
	Description       *string                   `json:"description"`
	DisplayName       *string                   `json:"displayName"`
	DocumentationURI  *string                   `json:"documentationUri"`
	ExternalURI       *string                   `json:"externalUri"`
	Labels            map[string]string         `json:"labels"`
	LaunchStage       *ConnectorLaunchStageEnum `json:"launchStage"`
	Name              *string                   `json:"name"`
	UpdateTime        *string                   `json:"updateTime"`
	WebAssetsLocation *string                   `json:"webAssetsLocation"`
}
