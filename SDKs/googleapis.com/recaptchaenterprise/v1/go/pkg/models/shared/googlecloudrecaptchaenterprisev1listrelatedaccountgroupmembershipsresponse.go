package shared

// GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse
// The response to a `ListRelatedAccountGroupMemberships` call.
type GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse struct {
	NextPageToken                  *string                                                         `json:"nextPageToken,omitempty"`
	RelatedAccountGroupMemberships []GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership `json:"relatedAccountGroupMemberships,omitempty"`
}
