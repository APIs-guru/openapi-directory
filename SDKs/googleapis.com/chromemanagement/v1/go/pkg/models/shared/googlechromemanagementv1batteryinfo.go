package shared

type GoogleChromeManagementV1BatteryInfo struct {
	DesignCapacity   *string         `json:"designCapacity"`
	DesignMinVoltage *int32          `json:"designMinVoltage"`
	ManufactureDate  *GoogleTypeDate `json:"manufactureDate"`
	Manufacturer     *string         `json:"manufacturer"`
	SerialNumber     *string         `json:"serialNumber"`
	Technology       *string         `json:"technology"`
}
