package shared

type GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse struct {
	NextPageToken                  *string                                                         `json:"nextPageToken"`
	RelatedAccountGroupMemberships []GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership `json:"relatedAccountGroupMemberships"`
}
