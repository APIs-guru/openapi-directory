package shared

type ListAutoscalingPoliciesResponse struct {
	NextPageToken *string             `json:"nextPageToken,omitempty"`
	Policies      []AutoscalingPolicy `json:"policies,omitempty"`
}
