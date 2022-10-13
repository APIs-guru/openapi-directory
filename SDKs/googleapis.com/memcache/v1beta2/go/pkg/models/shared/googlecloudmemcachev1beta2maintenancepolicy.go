package shared

type GoogleCloudMemcacheV1beta2MaintenancePolicy struct {
	CreateTime              *string                   `json:"createTime"`
	Description             *string                   `json:"description"`
	UpdateTime              *string                   `json:"updateTime"`
	WeeklyMaintenanceWindow []WeeklyMaintenanceWindow `json:"weeklyMaintenanceWindow"`
}
