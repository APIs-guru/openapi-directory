package shared

type IterationPerformance struct {
	PerTagPerformance     []TagPerformance `json:"PerTagPerformance"`
	Precision             *float64         `json:"Precision"`
	PrecisionStdDeviation *float64         `json:"PrecisionStdDeviation"`
	Recall                *float64         `json:"Recall"`
	RecallStdDeviation    *float64         `json:"RecallStdDeviation"`
}
