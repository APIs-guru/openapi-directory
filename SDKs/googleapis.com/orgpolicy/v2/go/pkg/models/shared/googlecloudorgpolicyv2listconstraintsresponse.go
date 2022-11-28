package shared

// GoogleCloudOrgpolicyV2ListConstraintsResponse
// The response returned from the ListConstraints method.
type GoogleCloudOrgpolicyV2ListConstraintsResponse struct {
	Constraints   []GoogleCloudOrgpolicyV2Constraint `json:"constraints,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
