package shared

type HealthCheck struct {
	CheckIntervalSec   *int32  `json:"checkIntervalSec,omitempty"`
	Description        *string `json:"description,omitempty"`
	HealthyThreshold   *int32  `json:"healthyThreshold,omitempty"`
	Host               *string `json:"host,omitempty"`
	Name               *string `json:"name,omitempty"`
	Path               *string `json:"path,omitempty"`
	Port               *int32  `json:"port,omitempty"`
	TimeoutSec         *int32  `json:"timeoutSec,omitempty"`
	UnhealthyThreshold *int32  `json:"unhealthyThreshold,omitempty"`
}
