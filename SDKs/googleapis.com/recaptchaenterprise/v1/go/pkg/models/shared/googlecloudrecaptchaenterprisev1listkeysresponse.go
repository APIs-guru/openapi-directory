package shared

type GoogleCloudRecaptchaenterpriseV1ListKeysResponse struct {
	Keys          []GoogleCloudRecaptchaenterpriseV1Key `json:"keys"`
	NextPageToken *string                               `json:"nextPageToken"`
}
