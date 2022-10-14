package shared

type HealthStatusEnum string

const (
	HealthStatusEnumUnknown HealthStatusEnum = "UNKNOWN"
	HealthStatusEnumUp      HealthStatusEnum = "UP"
	HealthStatusEnumDown    HealthStatusEnum = "DOWN"
)

type Health struct {
	Description *string           `json:"description,omitempty"`
	Details     map[string]Health `json:"details,omitempty"`
	Status      *HealthStatusEnum `json:"status,omitempty"`
}
