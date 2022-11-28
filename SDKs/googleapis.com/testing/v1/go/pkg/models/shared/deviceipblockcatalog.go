package shared

// DeviceIPBlockCatalog
// List of IP blocks used by the Firebase Test Lab
type DeviceIPBlockCatalog struct {
	IPBlocks []DeviceIPBlock `json:"ipBlocks,omitempty"`
}
