package shared



type GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry struct {
    ConfidenceThreshold *float32 `json:"confidenceThreshold,omitempty"`
    F1Score *float32 `json:"f1Score,omitempty"`
    F1ScoreAt1 *float32 `json:"f1ScoreAt1,omitempty"`
    F1ScoreAt5 *float32 `json:"f1ScoreAt5,omitempty"`
    Precision *float32 `json:"precision,omitempty"`
    PrecisionAt1 *float32 `json:"precisionAt1,omitempty"`
    PrecisionAt5 *float32 `json:"precisionAt5,omitempty"`
    Recall *float32 `json:"recall,omitempty"`
    RecallAt1 *float32 `json:"recallAt1,omitempty"`
    RecallAt5 *float32 `json:"recallAt5,omitempty"`
    
}

