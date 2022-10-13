package shared

type HealthCheck struct {
	CheckIntervalSec   *int32  `json:"checkIntervalSec"`
	Description        *string `json:"description"`
	HealthyThreshold   *int32  `json:"healthyThreshold"`
	Host               *string `json:"host"`
	Name               *string `json:"name"`
	Path               *string `json:"path"`
	Port               *int32  `json:"port"`
	TimeoutSec         *int32  `json:"timeoutSec"`
	UnhealthyThreshold *int32  `json:"unhealthyThreshold"`
}
