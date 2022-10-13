package shared

type PerformanceThreshold struct {
	BasicSliPerformance *BasicSli        `json:"basicSliPerformance"`
	Performance         *RequestBasedSli `json:"performance"`
	Threshold           *float64         `json:"threshold"`
}
