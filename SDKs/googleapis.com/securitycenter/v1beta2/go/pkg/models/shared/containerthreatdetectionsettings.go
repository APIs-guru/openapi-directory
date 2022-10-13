package shared

type ContainerThreatDetectionSettingsServiceEnablementStateEnum string

const (
	ContainerThreatDetectionSettingsServiceEnablementStateEnumEnablementStateUnspecified ContainerThreatDetectionSettingsServiceEnablementStateEnum = "ENABLEMENT_STATE_UNSPECIFIED"
	ContainerThreatDetectionSettingsServiceEnablementStateEnumInherited                  ContainerThreatDetectionSettingsServiceEnablementStateEnum = "INHERITED"
	ContainerThreatDetectionSettingsServiceEnablementStateEnumEnabled                    ContainerThreatDetectionSettingsServiceEnablementStateEnum = "ENABLED"
	ContainerThreatDetectionSettingsServiceEnablementStateEnumDisabled                   ContainerThreatDetectionSettingsServiceEnablementStateEnum = "DISABLED"
)

type ContainerThreatDetectionSettings struct {
	Modules                map[string]Config                                           `json:"modules"`
	Name                   *string                                                     `json:"name"`
	ServiceAccount         *string                                                     `json:"serviceAccount"`
	ServiceEnablementState *ContainerThreatDetectionSettingsServiceEnablementStateEnum `json:"serviceEnablementState"`
	UpdateTime             *string                                                     `json:"updateTime"`
}
