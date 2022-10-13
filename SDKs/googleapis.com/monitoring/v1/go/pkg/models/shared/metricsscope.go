package shared

type MetricsScope struct {
	CreateTime        *string            `json:"createTime"`
	MonitoredProjects []MonitoredProject `json:"monitoredProjects"`
	Name              *string            `json:"name"`
	UpdateTime        *string            `json:"updateTime"`
}
