package shared

type BusinessHourInputModel struct {
	EndTime   *int32 `json:"endTime,omitempty"`
	Is24Hours *bool  `json:"is24Hours,omitempty"`
	IsOpen    *bool  `json:"isOpen,omitempty"`
	StartTime *int32 `json:"startTime,omitempty"`
}
