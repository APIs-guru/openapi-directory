package shared

type IterationPerformance struct {
	AveragePrecision      *float32         `json:"averagePrecision"`
	PerTagPerformance     []TagPerformance `json:"perTagPerformance"`
	Precision             *float32         `json:"precision"`
	PrecisionStdDeviation *float32         `json:"precisionStdDeviation"`
	Recall                *float32         `json:"recall"`
	RecallStdDeviation    *float32         `json:"recallStdDeviation"`
}
