package shared

// GoogleCloudDatalabelingV1beta1OperatorMetadata
// General information useful for labels coming from contributors.
type GoogleCloudDatalabelingV1beta1OperatorMetadata struct {
	Comments   []string `json:"comments,omitempty"`
	LabelVotes *int32   `json:"labelVotes,omitempty"`
	Score      *float32 `json:"score,omitempty"`
	TotalVotes *int32   `json:"totalVotes,omitempty"`
}
