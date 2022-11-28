package shared

// GoogleCloudRecaptchaenterpriseV1ListKeysResponse
// Response to request to list keys in a project.
type GoogleCloudRecaptchaenterpriseV1ListKeysResponse struct {
	Keys          []GoogleCloudRecaptchaenterpriseV1Key `json:"keys,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
