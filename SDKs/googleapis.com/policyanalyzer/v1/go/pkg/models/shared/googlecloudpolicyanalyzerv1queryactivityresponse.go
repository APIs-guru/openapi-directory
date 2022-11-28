package shared

// GoogleCloudPolicyanalyzerV1QueryActivityResponse
// Response to the `QueryActivity` method.
type GoogleCloudPolicyanalyzerV1QueryActivityResponse struct {
	Activities    []GoogleCloudPolicyanalyzerV1Activity `json:"activities,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
