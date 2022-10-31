package shared

type BusinessCallsSettingsCallsStateEnum string

const (
	BusinessCallsSettingsCallsStateEnumCallsStateUnspecified BusinessCallsSettingsCallsStateEnum = "CALLS_STATE_UNSPECIFIED"
	BusinessCallsSettingsCallsStateEnumEnabled               BusinessCallsSettingsCallsStateEnum = "ENABLED"
	BusinessCallsSettingsCallsStateEnumDisabled              BusinessCallsSettingsCallsStateEnum = "DISABLED"
)

type BusinessCallsSettings struct {
	CallsState  *BusinessCallsSettingsCallsStateEnum `json:"callsState,omitempty"`
	ConsentTime *string                              `json:"consentTime,omitempty"`
	Name        *string                              `json:"name,omitempty"`
}
