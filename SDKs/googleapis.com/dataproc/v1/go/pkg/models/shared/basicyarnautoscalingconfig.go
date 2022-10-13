package shared

type BasicYarnAutoscalingConfig struct {
	GracefulDecommissionTimeout *string  `json:"gracefulDecommissionTimeout"`
	ScaleDownFactor             *float64 `json:"scaleDownFactor"`
	ScaleDownMinWorkerFraction  *float64 `json:"scaleDownMinWorkerFraction"`
	ScaleUpFactor               *float64 `json:"scaleUpFactor"`
	ScaleUpMinWorkerFraction    *float64 `json:"scaleUpMinWorkerFraction"`
}
