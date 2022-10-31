package shared



type AnthosVMSubFeatureSpec struct {
    Enabled *bool `json:"enabled,omitempty"`
    MigrateSpec map[string]interface{} `json:"migrateSpec,omitempty"`
    ServiceMeshSpec map[string]interface{} `json:"serviceMeshSpec,omitempty"`
    
}

