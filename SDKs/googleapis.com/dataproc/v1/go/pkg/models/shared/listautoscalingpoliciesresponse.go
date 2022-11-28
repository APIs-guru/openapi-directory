package shared

// ListAutoscalingPoliciesResponse
// A response to a request to list autoscaling policies in a project.
type ListAutoscalingPoliciesResponse struct {
	NextPageToken *string             `json:"nextPageToken,omitempty"`
	Policies      []AutoscalingPolicy `json:"policies,omitempty"`
}
