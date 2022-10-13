package shared

type GoogleCloudOrgpolicyV2ListConstraintsResponse struct {
	Constraints   []GoogleCloudOrgpolicyV2Constraint `json:"constraints"`
	NextPageToken *string                            `json:"nextPageToken"`
}
