package shared

type IterationPerformance struct {
	PerTagPerformance     []TagPerformance `json:"PerTagPerformance,omitempty"`
	Precision             *float64         `json:"Precision,omitempty"`
	PrecisionStdDeviation *float64         `json:"PrecisionStdDeviation,omitempty"`
	Recall                *float64         `json:"Recall,omitempty"`
	RecallStdDeviation    *float64         `json:"RecallStdDeviation,omitempty"`
}
