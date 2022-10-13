package shared

type BusinessHourInputModel struct {
	EndTime   *int32 `json:"endTime"`
	Is24Hours *bool  `json:"is24Hours"`
	IsOpen    *bool  `json:"isOpen"`
	StartTime *int32 `json:"startTime"`
}
