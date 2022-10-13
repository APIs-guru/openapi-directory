package shared

type WebSecurityScannerSettingsServiceEnablementStateEnum string

const (
	WebSecurityScannerSettingsServiceEnablementStateEnumEnablementStateUnspecified WebSecurityScannerSettingsServiceEnablementStateEnum = "ENABLEMENT_STATE_UNSPECIFIED"
	WebSecurityScannerSettingsServiceEnablementStateEnumInherited                  WebSecurityScannerSettingsServiceEnablementStateEnum = "INHERITED"
	WebSecurityScannerSettingsServiceEnablementStateEnumEnabled                    WebSecurityScannerSettingsServiceEnablementStateEnum = "ENABLED"
	WebSecurityScannerSettingsServiceEnablementStateEnumDisabled                   WebSecurityScannerSettingsServiceEnablementStateEnum = "DISABLED"
)

type WebSecurityScannerSettings struct {
	Modules                map[string]Config                                     `json:"modules"`
	Name                   *string                                               `json:"name"`
	ServiceEnablementState *WebSecurityScannerSettingsServiceEnablementStateEnum `json:"serviceEnablementState"`
	UpdateTime             *string                                               `json:"updateTime"`
}
