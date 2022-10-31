package shared



type VersionedResource struct {
    Resource map[string]interface{} `json:"resource,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

