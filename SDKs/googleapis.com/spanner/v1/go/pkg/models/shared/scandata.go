package shared

// ScanData
// ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization.
type ScanData struct {
	Data      *VisualizationData `json:"data,omitempty"`
	EndTime   *string            `json:"endTime,omitempty"`
	StartTime *string            `json:"startTime,omitempty"`
}
