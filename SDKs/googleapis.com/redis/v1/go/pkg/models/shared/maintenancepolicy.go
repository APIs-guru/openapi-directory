package shared

// MaintenancePolicyInput
// Maintenance policy for an instance.
type MaintenancePolicyInput struct {
	Description             *string                        `json:"description,omitempty"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindowInput `json:"weeklyMaintenanceWindow,omitempty"`
}

// MaintenancePolicy
// Maintenance policy for an instance.
type MaintenancePolicy struct {
	CreateTime              *string                   `json:"createTime,omitempty"`
	Description             *string                   `json:"description,omitempty"`
	UpdateTime              *string                   `json:"updateTime,omitempty"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindow `json:"weeklyMaintenanceWindow,omitempty"`
}
