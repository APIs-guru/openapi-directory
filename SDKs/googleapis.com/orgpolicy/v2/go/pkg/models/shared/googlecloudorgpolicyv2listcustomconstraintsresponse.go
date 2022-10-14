package shared

type GoogleCloudOrgpolicyV2ListCustomConstraintsResponse struct {
	CustomConstraints []GoogleCloudOrgpolicyV2CustomConstraint `json:"customConstraints,omitempty"`
	NextPageToken     *string                                  `json:"nextPageToken,omitempty"`
}
