package shared

type GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse struct {
	NextPageToken        *string                                               `json:"nextPageToken"`
	RelatedAccountGroups []GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup `json:"relatedAccountGroups"`
}
