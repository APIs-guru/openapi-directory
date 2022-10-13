package shared

type GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse struct {
	Activities    []GoogleCloudPolicyanalyzerV1beta1Activity `json:"activities"`
	NextPageToken *string                                    `json:"nextPageToken"`
}
