package shared

// ConfidentialInstanceConfig
// Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)
type ConfidentialInstanceConfig struct {
	EnableConfidentialCompute *bool `json:"enableConfidentialCompute,omitempty"`
}
