package shared

// PerformanceThreshold
// A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
type PerformanceThreshold struct {
	BasicSliPerformance *BasicSli        `json:"basicSliPerformance,omitempty"`
	Performance         *RequestBasedSli `json:"performance,omitempty"`
	Threshold           *float64         `json:"threshold,omitempty"`
}
