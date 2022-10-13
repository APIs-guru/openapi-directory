package shared

type ListJobMessagesResponse struct {
	AutoscalingEvents []AutoscalingEvent `json:"autoscalingEvents"`
	JobMessages       []JobMessage       `json:"jobMessages"`
	NextPageToken     *string            `json:"nextPageToken"`
}
