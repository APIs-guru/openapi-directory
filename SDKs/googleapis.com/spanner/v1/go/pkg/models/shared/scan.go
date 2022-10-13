package shared

type Scan struct {
	Details   map[string]interface{} `json:"details"`
	EndTime   *string                `json:"endTime"`
	Name      *string                `json:"name"`
	ScanData  *ScanData              `json:"scanData"`
	StartTime *string                `json:"startTime"`
}
