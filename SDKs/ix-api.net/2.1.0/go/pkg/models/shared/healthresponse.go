package shared

type HealthResponseStatusEnum string

const (
	HealthResponseStatusEnumPass HealthResponseStatusEnum = "pass"
	HealthResponseStatusEnumFail HealthResponseStatusEnum = "fail"
	HealthResponseStatusEnumWarn HealthResponseStatusEnum = "warn"
)

type HealthResponse struct {
	Checks      map[string]map[string]string `json:"checks,omitempty"`
	Description *string                      `json:"description,omitempty"`
	Links       map[string]string            `json:"links,omitempty"`
	Notes       []string                     `json:"notes,omitempty"`
	Output      *string                      `json:"output,omitempty"`
	ReleaseID   *string                      `json:"releaseId,omitempty"`
	ServiceID   *string                      `json:"serviceId,omitempty"`
	Status      HealthResponseStatusEnum     `json:"status"`
	Version     *string                      `json:"version,omitempty"`
}
