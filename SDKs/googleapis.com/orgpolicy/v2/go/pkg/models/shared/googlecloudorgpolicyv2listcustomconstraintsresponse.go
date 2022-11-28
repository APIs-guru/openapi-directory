package shared

// GoogleCloudOrgpolicyV2ListCustomConstraintsResponse
// The response returned from the ListCustomConstraints method. It will be empty if no `CustomConstraints` are set on the organization resource.
type GoogleCloudOrgpolicyV2ListCustomConstraintsResponse struct {
	CustomConstraints []GoogleCloudOrgpolicyV2CustomConstraint `json:"customConstraints,omitempty"`
	NextPageToken     *string                                  `json:"nextPageToken,omitempty"`
}
