package shared

// PatchInstanceFilterGroupLabel
// Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".
type PatchInstanceFilterGroupLabel struct {
	Labels map[string]string `json:"labels,omitempty"`
}
