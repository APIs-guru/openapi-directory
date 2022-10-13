package shared

type BusinessCallsSettingsCallsStateEnum string

const (
	BusinessCallsSettingsCallsStateEnumCallsStateUnspecified BusinessCallsSettingsCallsStateEnum = "CALLS_STATE_UNSPECIFIED"
	BusinessCallsSettingsCallsStateEnumEnabled               BusinessCallsSettingsCallsStateEnum = "ENABLED"
	BusinessCallsSettingsCallsStateEnumDisabled              BusinessCallsSettingsCallsStateEnum = "DISABLED"
)

type BusinessCallsSettings struct {
	CallsState  *BusinessCallsSettingsCallsStateEnum `json:"callsState"`
	ConsentTime *string                              `json:"consentTime"`
	Name        *string                              `json:"name"`
}
