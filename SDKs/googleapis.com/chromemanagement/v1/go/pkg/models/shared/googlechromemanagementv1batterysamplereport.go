package shared

// GoogleChromeManagementV1BatterySampleReport
// Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1BatterySampleReport struct {
	ChargeRate        *int32  `json:"chargeRate,omitempty"`
	Current           *string `json:"current,omitempty"`
	DischargeRate     *int32  `json:"dischargeRate,omitempty"`
	RemainingCapacity *string `json:"remainingCapacity,omitempty"`
	ReportTime        *string `json:"reportTime,omitempty"`
	Status            *string `json:"status,omitempty"`
	Temperature       *int32  `json:"temperature,omitempty"`
	Voltage           *string `json:"voltage,omitempty"`
}
