package shared

type AcceleratorConfigTypeEnum string

const (
	AcceleratorConfigTypeEnumAcceleratorTypeUnspecified AcceleratorConfigTypeEnum = "ACCELERATOR_TYPE_UNSPECIFIED"
	AcceleratorConfigTypeEnumNvidiaTeslaK80             AcceleratorConfigTypeEnum = "NVIDIA_TESLA_K80"
	AcceleratorConfigTypeEnumNvidiaTeslaP100            AcceleratorConfigTypeEnum = "NVIDIA_TESLA_P100"
	AcceleratorConfigTypeEnumNvidiaTeslaV100            AcceleratorConfigTypeEnum = "NVIDIA_TESLA_V100"
	AcceleratorConfigTypeEnumNvidiaTeslaP4              AcceleratorConfigTypeEnum = "NVIDIA_TESLA_P4"
	AcceleratorConfigTypeEnumNvidiaTeslaT4              AcceleratorConfigTypeEnum = "NVIDIA_TESLA_T4"
	AcceleratorConfigTypeEnumNvidiaTeslaA100            AcceleratorConfigTypeEnum = "NVIDIA_TESLA_A100"
	AcceleratorConfigTypeEnumNvidiaTeslaT4Vws           AcceleratorConfigTypeEnum = "NVIDIA_TESLA_T4_VWS"
	AcceleratorConfigTypeEnumNvidiaTeslaP100Vws         AcceleratorConfigTypeEnum = "NVIDIA_TESLA_P100_VWS"
	AcceleratorConfigTypeEnumNvidiaTeslaP4Vws           AcceleratorConfigTypeEnum = "NVIDIA_TESLA_P4_VWS"
	AcceleratorConfigTypeEnumTpuV2                      AcceleratorConfigTypeEnum = "TPU_V2"
	AcceleratorConfigTypeEnumTpuV3                      AcceleratorConfigTypeEnum = "TPU_V3"
)

// AcceleratorConfig
// Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
type AcceleratorConfig struct {
	CoreCount *string                    `json:"coreCount,omitempty"`
	Type      *AcceleratorConfigTypeEnum `json:"type,omitempty"`
}
