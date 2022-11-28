package shared

type RuntimeAcceleratorConfigTypeEnum string

const (
	RuntimeAcceleratorConfigTypeEnumAcceleratorTypeUnspecified RuntimeAcceleratorConfigTypeEnum = "ACCELERATOR_TYPE_UNSPECIFIED"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaK80             RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_K80"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaP100            RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_P100"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaV100            RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_V100"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaP4              RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_P4"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaT4              RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_T4"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaA100            RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_A100"
	RuntimeAcceleratorConfigTypeEnumTpuV2                      RuntimeAcceleratorConfigTypeEnum = "TPU_V2"
	RuntimeAcceleratorConfigTypeEnumTpuV3                      RuntimeAcceleratorConfigTypeEnum = "TPU_V3"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaT4Vws           RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_T4_VWS"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaP100Vws         RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_P100_VWS"
	RuntimeAcceleratorConfigTypeEnumNvidiaTeslaP4Vws           RuntimeAcceleratorConfigTypeEnum = "NVIDIA_TESLA_P4_VWS"
)

// RuntimeAcceleratorConfig
// Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
type RuntimeAcceleratorConfig struct {
	CoreCount *string                           `json:"coreCount,omitempty"`
	Type      *RuntimeAcceleratorConfigTypeEnum `json:"type,omitempty"`
}
