package shared



type GoogleCloudAssetV1AccessControlList struct {
    Accesses []GoogleCloudAssetV1Access `json:"accesses,omitempty"`
    ConditionEvaluation *ConditionEvaluation `json:"conditionEvaluation,omitempty"`
    ResourceEdges []GoogleCloudAssetV1Edge `json:"resourceEdges,omitempty"`
    Resources []GoogleCloudAssetV1Resource `json:"resources,omitempty"`
    
}

