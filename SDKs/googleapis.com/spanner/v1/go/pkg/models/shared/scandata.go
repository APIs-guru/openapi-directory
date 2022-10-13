package shared

type ScanData struct {
	Data      *VisualizationData `json:"data"`
	EndTime   *string            `json:"endTime"`
	StartTime *string            `json:"startTime"`
}
