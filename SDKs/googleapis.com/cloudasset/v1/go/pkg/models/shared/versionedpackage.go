package shared



type VersionedPackage struct {
    Architecture *string `json:"architecture,omitempty"`
    PackageName *string `json:"packageName,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

