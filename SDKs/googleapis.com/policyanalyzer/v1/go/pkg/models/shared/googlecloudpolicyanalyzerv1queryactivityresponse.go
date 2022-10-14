package shared

type GoogleCloudPolicyanalyzerV1QueryActivityResponse struct {
	Activities    []GoogleCloudPolicyanalyzerV1Activity `json:"activities,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
