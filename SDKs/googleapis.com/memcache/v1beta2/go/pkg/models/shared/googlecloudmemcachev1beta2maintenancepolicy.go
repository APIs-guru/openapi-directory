package shared

// GoogleCloudMemcacheV1beta2MaintenancePolicyInput
// Maintenance policy per instance.
type GoogleCloudMemcacheV1beta2MaintenancePolicyInput struct {
	Description             *string                   `json:"description,omitempty"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindow `json:"weeklyMaintenanceWindow,omitempty"`
}

// GoogleCloudMemcacheV1beta2MaintenancePolicy
// Maintenance policy per instance.
type GoogleCloudMemcacheV1beta2MaintenancePolicy struct {
	CreateTime              *string                   `json:"createTime,omitempty"`
	Description             *string                   `json:"description,omitempty"`
	UpdateTime              *string                   `json:"updateTime,omitempty"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindow `json:"weeklyMaintenanceWindow,omitempty"`
}
