package shared

type GoogleChromeManagementV1BatterySampleReport struct {
	ChargeRate        *int32  `json:"chargeRate"`
	Current           *string `json:"current"`
	DischargeRate     *int32  `json:"dischargeRate"`
	RemainingCapacity *string `json:"remainingCapacity"`
	ReportTime        *string `json:"reportTime"`
	Status            *string `json:"status"`
	Temperature       *int32  `json:"temperature"`
	Voltage           *string `json:"voltage"`
}
