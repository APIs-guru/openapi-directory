package shared

type GoogleCloudDatalabelingV1beta1OperatorMetadata struct {
	Comments   []string `json:"comments"`
	LabelVotes *int32   `json:"labelVotes"`
	Score      *float32 `json:"score"`
	TotalVotes *int32   `json:"totalVotes"`
}
