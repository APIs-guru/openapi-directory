package shared

type GoogleCloudOrgpolicyV2ListCustomConstraintsResponse struct {
	CustomConstraints []GoogleCloudOrgpolicyV2CustomConstraint `json:"customConstraints"`
	NextPageToken     *string                                  `json:"nextPageToken"`
}
