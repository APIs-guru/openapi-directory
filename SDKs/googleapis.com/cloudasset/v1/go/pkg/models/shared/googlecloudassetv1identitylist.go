package shared

// GoogleCloudAssetV1IdentityList
// The identities and group edges.
type GoogleCloudAssetV1IdentityList struct {
	GroupEdges []GoogleCloudAssetV1Edge     `json:"groupEdges,omitempty"`
	Identities []GoogleCloudAssetV1Identity `json:"identities,omitempty"`
}
