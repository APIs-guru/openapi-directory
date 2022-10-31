package shared



type TagPerformance struct {
    AveragePrecision *float32 `json:"averagePrecision,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Precision *float32 `json:"precision,omitempty"`
    PrecisionStdDeviation *float32 `json:"precisionStdDeviation,omitempty"`
    Recall *float32 `json:"recall,omitempty"`
    RecallStdDeviation *float32 `json:"recallStdDeviation,omitempty"`
    
}

