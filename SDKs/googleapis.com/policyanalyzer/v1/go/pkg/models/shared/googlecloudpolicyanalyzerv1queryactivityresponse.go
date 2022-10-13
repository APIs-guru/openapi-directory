package shared

type GoogleCloudPolicyanalyzerV1QueryActivityResponse struct {
	Activities    []GoogleCloudPolicyanalyzerV1Activity `json:"activities"`
	NextPageToken *string                               `json:"nextPageToken"`
}
