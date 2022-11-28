package shared

// GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
// The response to a `ListRelatedAccountGroups` call.
type GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse struct {
	NextPageToken        *string                                               `json:"nextPageToken,omitempty"`
	RelatedAccountGroups []GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup `json:"relatedAccountGroups,omitempty"`
}
