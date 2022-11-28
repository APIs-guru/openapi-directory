package shared

// AcceleratorConfig
// Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).
type AcceleratorConfig struct {
	AcceleratorCount   *int32  `json:"acceleratorCount,omitempty"`
	AcceleratorTypeURI *string `json:"acceleratorTypeUri,omitempty"`
}
