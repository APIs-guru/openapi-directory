package shared

type AnthosVMSubFeatureSpec struct {
	Enabled         *bool                  `json:"enabled"`
	MigrateSpec     map[string]interface{} `json:"migrateSpec"`
	ServiceMeshSpec map[string]interface{} `json:"serviceMeshSpec"`
}
