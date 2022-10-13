package shared

type GoogleCloudAssetV1p4beta1AccessControlList struct {
	Accesses      []GoogleCloudAssetV1p4beta1Access   `json:"accesses"`
	ResourceEdges []GoogleCloudAssetV1p4beta1Edge     `json:"resourceEdges"`
	Resources     []GoogleCloudAssetV1p4beta1Resource `json:"resources"`
}
