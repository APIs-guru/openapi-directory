package shared

type HealthStatusEnum string

const (
	HealthStatusEnumUnknown HealthStatusEnum = "UNKNOWN"
	HealthStatusEnumUp      HealthStatusEnum = "UP"
	HealthStatusEnumDown    HealthStatusEnum = "DOWN"
)

type Health struct {
	Description *string           `json:"description"`
	Details     map[string]Health `json:"details"`
	Status      *HealthStatusEnum `json:"status"`
}
