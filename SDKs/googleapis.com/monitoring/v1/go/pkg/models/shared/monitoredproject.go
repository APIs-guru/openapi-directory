package shared

// MonitoredProject
// A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
type MonitoredProject struct {
	CreateTime *string `json:"createTime,omitempty"`
	Name       *string `json:"name,omitempty"`
}

// MonitoredProjectInput
// A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.
type MonitoredProjectInput struct {
	Name *string `json:"name,omitempty"`
}
