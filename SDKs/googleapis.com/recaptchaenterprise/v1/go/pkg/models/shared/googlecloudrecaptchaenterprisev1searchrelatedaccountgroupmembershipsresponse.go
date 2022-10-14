package shared

type GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse struct {
	NextPageToken                  *string                                                         `json:"nextPageToken,omitempty"`
	RelatedAccountGroupMemberships []GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership `json:"relatedAccountGroupMemberships,omitempty"`
}
