package shared

// MetricsScope
// Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.
type MetricsScope struct {
	CreateTime        *string            `json:"createTime,omitempty"`
	MonitoredProjects []MonitoredProject `json:"monitoredProjects,omitempty"`
	Name              *string            `json:"name,omitempty"`
	UpdateTime        *string            `json:"updateTime,omitempty"`
}
