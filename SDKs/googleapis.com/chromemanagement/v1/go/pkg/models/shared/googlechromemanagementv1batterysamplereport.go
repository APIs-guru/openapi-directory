package shared



type GoogleChromeManagementV1BatterySampleReport struct {
    ChargeRate *int32 `json:"chargeRate,omitempty"`
    Current *string `json:"current,omitempty"`
    DischargeRate *int32 `json:"dischargeRate,omitempty"`
    RemainingCapacity *string `json:"remainingCapacity,omitempty"`
    ReportTime *string `json:"reportTime,omitempty"`
    Status *string `json:"status,omitempty"`
    Temperature *int32 `json:"temperature,omitempty"`
    Voltage *string `json:"voltage,omitempty"`
    
}

