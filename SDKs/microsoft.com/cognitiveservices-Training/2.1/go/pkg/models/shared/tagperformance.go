package shared

type TagPerformance struct {
	AveragePrecision      *float32 `json:"averagePrecision"`
	ID                    *string  `json:"id"`
	Name                  *string  `json:"name"`
	Precision             *float32 `json:"precision"`
	PrecisionStdDeviation *float32 `json:"precisionStdDeviation"`
	Recall                *float32 `json:"recall"`
	RecallStdDeviation    *float32 `json:"recallStdDeviation"`
}
