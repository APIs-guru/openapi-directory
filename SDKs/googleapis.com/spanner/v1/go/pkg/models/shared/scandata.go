package shared

type ScanData struct {
	Data      *VisualizationData `json:"data,omitempty"`
	EndTime   *string            `json:"endTime,omitempty"`
	StartTime *string            `json:"startTime,omitempty"`
}
