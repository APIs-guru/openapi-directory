package shared

type GoogleCloudAssetV1AccessControlList struct {
	Accesses            []GoogleCloudAssetV1Access   `json:"accesses"`
	ConditionEvaluation *ConditionEvaluation         `json:"conditionEvaluation"`
	ResourceEdges       []GoogleCloudAssetV1Edge     `json:"resourceEdges"`
	Resources           []GoogleCloudAssetV1Resource `json:"resources"`
}
