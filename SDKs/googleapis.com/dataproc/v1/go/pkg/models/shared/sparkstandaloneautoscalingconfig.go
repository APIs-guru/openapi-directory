package shared



type SparkStandaloneAutoscalingConfig struct {
    GracefulDecommissionTimeout *string `json:"gracefulDecommissionTimeout,omitempty"`
    ScaleDownFactor *float64 `json:"scaleDownFactor,omitempty"`
    ScaleDownMinWorkerFraction *float64 `json:"scaleDownMinWorkerFraction,omitempty"`
    ScaleUpFactor *float64 `json:"scaleUpFactor,omitempty"`
    ScaleUpMinWorkerFraction *float64 `json:"scaleUpMinWorkerFraction,omitempty"`
    
}

