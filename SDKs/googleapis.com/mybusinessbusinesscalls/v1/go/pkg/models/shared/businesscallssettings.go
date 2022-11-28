package shared

type BusinessCallsSettingsCallsStateEnum string

const (
	BusinessCallsSettingsCallsStateEnumCallsStateUnspecified BusinessCallsSettingsCallsStateEnum = "CALLS_STATE_UNSPECIFIED"
	BusinessCallsSettingsCallsStateEnumEnabled               BusinessCallsSettingsCallsStateEnum = "ENABLED"
	BusinessCallsSettingsCallsStateEnumDisabled              BusinessCallsSettingsCallsStateEnum = "DISABLED"
)

// BusinessCallsSettings
// Business calls settings for a location.
type BusinessCallsSettings struct {
	CallsState  *BusinessCallsSettingsCallsStateEnum `json:"callsState,omitempty"`
	ConsentTime *string                              `json:"consentTime,omitempty"`
	Name        *string                              `json:"name,omitempty"`
}
