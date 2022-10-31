package shared



type IterationPerformance struct {
    AveragePrecision *float32 `json:"averagePrecision,omitempty"`
    PerTagPerformance []TagPerformance `json:"perTagPerformance,omitempty"`
    Precision *float32 `json:"precision,omitempty"`
    PrecisionStdDeviation *float32 `json:"precisionStdDeviation,omitempty"`
    Recall *float32 `json:"recall,omitempty"`
    RecallStdDeviation *float32 `json:"recallStdDeviation,omitempty"`
    
}

