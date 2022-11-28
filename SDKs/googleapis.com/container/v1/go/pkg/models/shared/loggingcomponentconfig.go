package shared

type LoggingComponentConfigEnableComponentsEnum string

const (
	LoggingComponentConfigEnableComponentsEnumComponentUnspecified LoggingComponentConfigEnableComponentsEnum = "COMPONENT_UNSPECIFIED"
	LoggingComponentConfigEnableComponentsEnumSystemComponents     LoggingComponentConfigEnableComponentsEnum = "SYSTEM_COMPONENTS"
	LoggingComponentConfigEnableComponentsEnumWorkloads            LoggingComponentConfigEnableComponentsEnum = "WORKLOADS"
	LoggingComponentConfigEnableComponentsEnumApiserver            LoggingComponentConfigEnableComponentsEnum = "APISERVER"
	LoggingComponentConfigEnableComponentsEnumScheduler            LoggingComponentConfigEnableComponentsEnum = "SCHEDULER"
	LoggingComponentConfigEnableComponentsEnumControllerManager    LoggingComponentConfigEnableComponentsEnum = "CONTROLLER_MANAGER"
)

// LoggingComponentConfig
// LoggingComponentConfig is cluster logging component configuration.
type LoggingComponentConfig struct {
	EnableComponents []LoggingComponentConfigEnableComponentsEnum `json:"enableComponents,omitempty"`
}
