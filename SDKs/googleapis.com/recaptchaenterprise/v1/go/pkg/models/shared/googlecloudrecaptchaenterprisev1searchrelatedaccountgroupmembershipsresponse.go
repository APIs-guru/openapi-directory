package shared

// GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
// The response to a `SearchRelatedAccountGroupMemberships` call.
type GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse struct {
	NextPageToken                  *string                                                         `json:"nextPageToken,omitempty"`
	RelatedAccountGroupMemberships []GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership `json:"relatedAccountGroupMemberships,omitempty"`
}
