package shared

type GpuSharingConfigGpuSharingStrategyEnum string

const (
	GpuSharingConfigGpuSharingStrategyEnumGpuSharingStrategyUnspecified GpuSharingConfigGpuSharingStrategyEnum = "GPU_SHARING_STRATEGY_UNSPECIFIED"
	GpuSharingConfigGpuSharingStrategyEnumTimeSharing                   GpuSharingConfigGpuSharingStrategyEnum = "TIME_SHARING"
)

type GpuSharingConfig struct {
	GpuSharingStrategy     *GpuSharingConfigGpuSharingStrategyEnum `json:"gpuSharingStrategy"`
	MaxSharedClientsPerGpu *string                                 `json:"maxSharedClientsPerGpu"`
}
