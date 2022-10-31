package shared



type MetricsScope struct {
    CreateTime *string `json:"createTime,omitempty"`
    MonitoredProjects []MonitoredProject `json:"monitoredProjects,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

