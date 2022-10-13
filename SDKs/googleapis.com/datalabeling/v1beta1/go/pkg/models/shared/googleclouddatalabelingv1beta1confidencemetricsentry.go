package shared

type GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry struct {
	ConfidenceThreshold *float32 `json:"confidenceThreshold"`
	F1Score             *float32 `json:"f1Score"`
	F1ScoreAt1          *float32 `json:"f1ScoreAt1"`
	F1ScoreAt5          *float32 `json:"f1ScoreAt5"`
	Precision           *float32 `json:"precision"`
	PrecisionAt1        *float32 `json:"precisionAt1"`
	PrecisionAt5        *float32 `json:"precisionAt5"`
	Recall              *float32 `json:"recall"`
	RecallAt1           *float32 `json:"recallAt1"`
	RecallAt5           *float32 `json:"recallAt5"`
}
