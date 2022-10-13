package shared

type GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse struct {
	NextPageToken                  *string                                                         `json:"nextPageToken"`
	RelatedAccountGroupMemberships []GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership `json:"relatedAccountGroupMemberships"`
}
