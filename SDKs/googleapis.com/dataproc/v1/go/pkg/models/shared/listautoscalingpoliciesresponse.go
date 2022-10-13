package shared

type ListAutoscalingPoliciesResponse struct {
	NextPageToken *string             `json:"nextPageToken"`
	Policies      []AutoscalingPolicy `json:"policies"`
}
