package shared

// Resources
// The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
type Resources struct {
	Regions        []string        `json:"regions,omitempty"`
	VirtualMachine *VirtualMachine `json:"virtualMachine,omitempty"`
	Zones          []string        `json:"zones,omitempty"`
}
