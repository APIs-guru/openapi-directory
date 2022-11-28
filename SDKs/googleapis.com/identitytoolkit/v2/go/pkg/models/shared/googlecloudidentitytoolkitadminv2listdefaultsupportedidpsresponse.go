package shared

// GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
// Response for ListDefaultSupportedIdps
type GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse struct {
	DefaultSupportedIdps []GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp `json:"defaultSupportedIdps,omitempty"`
	NextPageToken        *string                                                `json:"nextPageToken,omitempty"`
}
