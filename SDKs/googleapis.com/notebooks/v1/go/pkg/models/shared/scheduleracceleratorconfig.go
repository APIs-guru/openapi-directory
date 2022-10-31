package shared

type SchedulerAcceleratorConfigTypeEnum string

const (
	SchedulerAcceleratorConfigTypeEnumSchedulerAcceleratorTypeUnspecified SchedulerAcceleratorConfigTypeEnum = "SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED"
	SchedulerAcceleratorConfigTypeEnumNvidiaTeslaK80                      SchedulerAcceleratorConfigTypeEnum = "NVIDIA_TESLA_K80"
	SchedulerAcceleratorConfigTypeEnumNvidiaTeslaP100                     SchedulerAcceleratorConfigTypeEnum = "NVIDIA_TESLA_P100"
	SchedulerAcceleratorConfigTypeEnumNvidiaTeslaV100                     SchedulerAcceleratorConfigTypeEnum = "NVIDIA_TESLA_V100"
	SchedulerAcceleratorConfigTypeEnumNvidiaTeslaP4                       SchedulerAcceleratorConfigTypeEnum = "NVIDIA_TESLA_P4"
	SchedulerAcceleratorConfigTypeEnumNvidiaTeslaT4                       SchedulerAcceleratorConfigTypeEnum = "NVIDIA_TESLA_T4"
	SchedulerAcceleratorConfigTypeEnumNvidiaTeslaA100                     SchedulerAcceleratorConfigTypeEnum = "NVIDIA_TESLA_A100"
	SchedulerAcceleratorConfigTypeEnumTpuV2                               SchedulerAcceleratorConfigTypeEnum = "TPU_V2"
	SchedulerAcceleratorConfigTypeEnumTpuV3                               SchedulerAcceleratorConfigTypeEnum = "TPU_V3"
)

type SchedulerAcceleratorConfig struct {
	CoreCount *string                             `json:"coreCount,omitempty"`
	Type      *SchedulerAcceleratorConfigTypeEnum `json:"type,omitempty"`
}
