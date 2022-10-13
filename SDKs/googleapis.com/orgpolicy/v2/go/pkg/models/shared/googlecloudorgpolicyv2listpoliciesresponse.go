package shared

type GoogleCloudOrgpolicyV2ListPoliciesResponse struct {
	NextPageToken *string                        `json:"nextPageToken"`
	Policies      []GoogleCloudOrgpolicyV2Policy `json:"policies"`
}
