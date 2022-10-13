package shared

type DiagnosticsAlertsEnum string

const (
	DiagnosticsAlertsEnumAlertUnspecified DiagnosticsAlertsEnum = "ALERT_UNSPECIFIED"
	DiagnosticsAlertsEnumWrongLocation    DiagnosticsAlertsEnum = "WRONG_LOCATION"
	DiagnosticsAlertsEnumLowBattery       DiagnosticsAlertsEnum = "LOW_BATTERY"
	DiagnosticsAlertsEnumLowActivity      DiagnosticsAlertsEnum = "LOW_ACTIVITY"
)

type Diagnostics struct {
	Alerts                  []DiagnosticsAlertsEnum `json:"alerts"`
	BeaconName              *string                 `json:"beaconName"`
	EstimatedLowBatteryDate *Date                   `json:"estimatedLowBatteryDate"`
}
