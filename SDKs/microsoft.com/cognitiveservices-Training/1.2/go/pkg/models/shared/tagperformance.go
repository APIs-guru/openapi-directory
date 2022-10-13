package shared

type TagPerformance struct {
	ID                    *string  `json:"Id"`
	Name                  *string  `json:"Name"`
	Precision             *float64 `json:"Precision"`
	PrecisionStdDeviation *float64 `json:"PrecisionStdDeviation"`
	Recall                *float64 `json:"Recall"`
	RecallStdDeviation    *float64 `json:"RecallStdDeviation"`
}
