package shared

type WebSecurityScannerSettingsServiceEnablementStateEnum string

const (
	WebSecurityScannerSettingsServiceEnablementStateEnumEnablementStateUnspecified WebSecurityScannerSettingsServiceEnablementStateEnum = "ENABLEMENT_STATE_UNSPECIFIED"
	WebSecurityScannerSettingsServiceEnablementStateEnumInherited                  WebSecurityScannerSettingsServiceEnablementStateEnum = "INHERITED"
	WebSecurityScannerSettingsServiceEnablementStateEnumEnabled                    WebSecurityScannerSettingsServiceEnablementStateEnum = "ENABLED"
	WebSecurityScannerSettingsServiceEnablementStateEnumDisabled                   WebSecurityScannerSettingsServiceEnablementStateEnum = "DISABLED"
)

type WebSecurityScannerSettings struct {
	Modules                map[string]Config                                     `json:"modules,omitempty"`
	Name                   *string                                               `json:"name,omitempty"`
	ServiceEnablementState *WebSecurityScannerSettingsServiceEnablementStateEnum `json:"serviceEnablementState,omitempty"`
	UpdateTime             *string                                               `json:"updateTime,omitempty"`
}
