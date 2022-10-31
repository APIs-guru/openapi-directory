package shared



type InventoryVersionedPackage struct {
    Architecture *string `json:"architecture,omitempty"`
    PackageName *string `json:"packageName,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

