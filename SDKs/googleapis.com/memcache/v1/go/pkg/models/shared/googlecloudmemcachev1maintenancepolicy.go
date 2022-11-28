package shared

// GoogleCloudMemcacheV1MaintenancePolicy
// Maintenance policy per instance.
type GoogleCloudMemcacheV1MaintenancePolicy struct {
	CreateTime              *string                   `json:"createTime,omitempty"`
	Description             *string                   `json:"description,omitempty"`
	UpdateTime              *string                   `json:"updateTime,omitempty"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindow `json:"weeklyMaintenanceWindow,omitempty"`
}

// GoogleCloudMemcacheV1MaintenancePolicyInput
// Maintenance policy per instance.
type GoogleCloudMemcacheV1MaintenancePolicyInput struct {
	Description             *string                   `json:"description,omitempty"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindow `json:"weeklyMaintenanceWindow,omitempty"`
}
