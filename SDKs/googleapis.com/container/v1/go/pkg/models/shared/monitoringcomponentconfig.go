package shared

type MonitoringComponentConfigEnableComponentsEnum string

const (
	MonitoringComponentConfigEnableComponentsEnumComponentUnspecified MonitoringComponentConfigEnableComponentsEnum = "COMPONENT_UNSPECIFIED"
	MonitoringComponentConfigEnableComponentsEnumSystemComponents     MonitoringComponentConfigEnableComponentsEnum = "SYSTEM_COMPONENTS"
	MonitoringComponentConfigEnableComponentsEnumApiserver            MonitoringComponentConfigEnableComponentsEnum = "APISERVER"
	MonitoringComponentConfigEnableComponentsEnumScheduler            MonitoringComponentConfigEnableComponentsEnum = "SCHEDULER"
	MonitoringComponentConfigEnableComponentsEnumControllerManager    MonitoringComponentConfigEnableComponentsEnum = "CONTROLLER_MANAGER"
)

// MonitoringComponentConfig
// MonitoringComponentConfig is cluster monitoring component configuration.
type MonitoringComponentConfig struct {
	EnableComponents []MonitoringComponentConfigEnableComponentsEnum `json:"enableComponents,omitempty"`
}
