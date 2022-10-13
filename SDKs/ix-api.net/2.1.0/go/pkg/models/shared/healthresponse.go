package shared

type HealthResponseStatusEnum string

const (
	HealthResponseStatusEnumPass HealthResponseStatusEnum = "pass"
	HealthResponseStatusEnumFail HealthResponseStatusEnum = "fail"
	HealthResponseStatusEnumWarn HealthResponseStatusEnum = "warn"
)

type HealthResponse struct {
	Checks      map[string]map[string]string `json:"checks"`
	Description *string                      `json:"description"`
	Links       map[string]string            `json:"links"`
	Notes       []string                     `json:"notes"`
	Output      *string                      `json:"output"`
	ReleaseID   *string                      `json:"releaseId"`
	ServiceID   *string                      `json:"serviceId"`
	Status      HealthResponseStatusEnum     `json:"status"`
	Version     *string                      `json:"version"`
}
