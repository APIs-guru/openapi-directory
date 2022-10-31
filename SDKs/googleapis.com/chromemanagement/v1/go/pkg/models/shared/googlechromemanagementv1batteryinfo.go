package shared

type GoogleChromeManagementV1BatteryInfo struct {
	DesignCapacity   *string         `json:"designCapacity,omitempty"`
	DesignMinVoltage *int32          `json:"designMinVoltage,omitempty"`
	ManufactureDate  *GoogleTypeDate `json:"manufactureDate,omitempty"`
	Manufacturer     *string         `json:"manufacturer,omitempty"`
	SerialNumber     *string         `json:"serialNumber,omitempty"`
	Technology       *string         `json:"technology,omitempty"`
}
