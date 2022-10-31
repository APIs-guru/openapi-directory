package shared

type GoogleCloudMemcacheV1beta2MaintenancePolicy struct {
	CreateTime              *string                   `json:"createTime,omitempty"`
	Description             *string                   `json:"description,omitempty"`
	UpdateTime              *string                   `json:"updateTime,omitempty"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindow `json:"weeklyMaintenanceWindow,omitempty"`
}
