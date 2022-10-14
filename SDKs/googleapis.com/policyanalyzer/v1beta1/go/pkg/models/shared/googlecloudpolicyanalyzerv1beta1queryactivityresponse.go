package shared

type GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse struct {
	Activities    []GoogleCloudPolicyanalyzerV1beta1Activity `json:"activities,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
