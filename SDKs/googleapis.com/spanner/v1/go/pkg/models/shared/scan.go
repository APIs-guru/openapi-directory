package shared

// Scan
// Scan is a structure which describes Cloud Key Visualizer scan information.
type Scan struct {
	Details   map[string]interface{} `json:"details,omitempty"`
	EndTime   *string                `json:"endTime,omitempty"`
	Name      *string                `json:"name,omitempty"`
	ScanData  *ScanData              `json:"scanData,omitempty"`
	StartTime *string                `json:"startTime,omitempty"`
}
