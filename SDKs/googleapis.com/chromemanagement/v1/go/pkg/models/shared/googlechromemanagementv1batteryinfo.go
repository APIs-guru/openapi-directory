package shared

// GoogleChromeManagementV1BatteryInfo
// Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
type GoogleChromeManagementV1BatteryInfo struct {
	DesignCapacity   *string         `json:"designCapacity,omitempty"`
	DesignMinVoltage *int32          `json:"designMinVoltage,omitempty"`
	ManufactureDate  *GoogleTypeDate `json:"manufactureDate,omitempty"`
	Manufacturer     *string         `json:"manufacturer,omitempty"`
	SerialNumber     *string         `json:"serialNumber,omitempty"`
	Technology       *string         `json:"technology,omitempty"`
}
