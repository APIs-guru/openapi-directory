package shared

type GoogleCloudDataplexV1TaskExecutionStatus struct {
	LatestJob  *GoogleCloudDataplexV1Job `json:"latestJob"`
	UpdateTime *string                   `json:"updateTime"`
}
