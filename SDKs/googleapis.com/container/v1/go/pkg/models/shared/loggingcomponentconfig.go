package shared

type LoggingComponentConfigEnableComponentsEnum string

const (
	LoggingComponentConfigEnableComponentsEnumComponentUnspecified LoggingComponentConfigEnableComponentsEnum = "COMPONENT_UNSPECIFIED"
	LoggingComponentConfigEnableComponentsEnumSystemComponents     LoggingComponentConfigEnableComponentsEnum = "SYSTEM_COMPONENTS"
	LoggingComponentConfigEnableComponentsEnumWorkloads            LoggingComponentConfigEnableComponentsEnum = "WORKLOADS"
)

type LoggingComponentConfig struct {
	EnableComponents []LoggingComponentConfigEnableComponentsEnum `json:"enableComponents"`
}
