package shared

type ContainerThreatDetectionSettingsServiceEnablementStateEnum string

const (
	ContainerThreatDetectionSettingsServiceEnablementStateEnumEnablementStateUnspecified ContainerThreatDetectionSettingsServiceEnablementStateEnum = "ENABLEMENT_STATE_UNSPECIFIED"
	ContainerThreatDetectionSettingsServiceEnablementStateEnumInherited                  ContainerThreatDetectionSettingsServiceEnablementStateEnum = "INHERITED"
	ContainerThreatDetectionSettingsServiceEnablementStateEnumEnabled                    ContainerThreatDetectionSettingsServiceEnablementStateEnum = "ENABLED"
	ContainerThreatDetectionSettingsServiceEnablementStateEnumDisabled                   ContainerThreatDetectionSettingsServiceEnablementStateEnum = "DISABLED"
)

// ContainerThreatDetectionSettings
// Resource capturing the settings for the Container Threat Detection service.
type ContainerThreatDetectionSettings struct {
	Modules                map[string]Config                                           `json:"modules,omitempty"`
	Name                   *string                                                     `json:"name,omitempty"`
	ServiceAccount         *string                                                     `json:"serviceAccount,omitempty"`
	ServiceEnablementState *ContainerThreatDetectionSettingsServiceEnablementStateEnum `json:"serviceEnablementState,omitempty"`
	UpdateTime             *string                                                     `json:"updateTime,omitempty"`
}

// ContainerThreatDetectionSettingsInput
// Resource capturing the settings for the Container Threat Detection service.
type ContainerThreatDetectionSettingsInput struct {
	Modules                map[string]Config                                           `json:"modules,omitempty"`
	Name                   *string                                                     `json:"name,omitempty"`
	ServiceEnablementState *ContainerThreatDetectionSettingsServiceEnablementStateEnum `json:"serviceEnablementState,omitempty"`
}
