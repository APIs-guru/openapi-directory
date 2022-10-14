package shared

type GoogleCloudAssetV1p4beta1AccessControlList struct {
	Accesses      []GoogleCloudAssetV1p4beta1Access   `json:"accesses,omitempty"`
	ResourceEdges []GoogleCloudAssetV1p4beta1Edge     `json:"resourceEdges,omitempty"`
	Resources     []GoogleCloudAssetV1p4beta1Resource `json:"resources,omitempty"`
}
