package shared

// DataDiskAssignment
// Data disk assignment for a given VM instance.
type DataDiskAssignment struct {
	DataDisks  []string `json:"dataDisks,omitempty"`
	VMInstance *string  `json:"vmInstance,omitempty"`
}
