package shared

type DiagnosticsAlertsEnum string

const (
	DiagnosticsAlertsEnumAlertUnspecified DiagnosticsAlertsEnum = "ALERT_UNSPECIFIED"
	DiagnosticsAlertsEnumWrongLocation    DiagnosticsAlertsEnum = "WRONG_LOCATION"
	DiagnosticsAlertsEnumLowBattery       DiagnosticsAlertsEnum = "LOW_BATTERY"
	DiagnosticsAlertsEnumLowActivity      DiagnosticsAlertsEnum = "LOW_ACTIVITY"
)

type Diagnostics struct {
	Alerts                  []DiagnosticsAlertsEnum `json:"alerts,omitempty"`
	BeaconName              *string                 `json:"beaconName,omitempty"`
	EstimatedLowBatteryDate *Date                   `json:"estimatedLowBatteryDate,omitempty"`
}
