package shared

type ServiceTypeEnum string

const (
	ServiceTypeEnumService  ServiceTypeEnum = "service"
	ServiceTypeEnumPickup   ServiceTypeEnum = "pickup"
	ServiceTypeEnumDelivery ServiceTypeEnum = "delivery"
)

type Service struct {
	Address            *Address         `json:"address"`
	AllowedVehicles    []string         `json:"allowed_vehicles"`
	DisallowedVehicles []string         `json:"disallowed_vehicles"`
	Duration           *int64           `json:"duration"`
	Group              *string          `json:"group"`
	ID                 string           `json:"id"`
	MaxTimeInVehicle   *int64           `json:"max_time_in_vehicle"`
	Name               *string          `json:"name"`
	PreparationTime    *int64           `json:"preparation_time"`
	Priority           *int32           `json:"priority"`
	RequiredSkills     []string         `json:"required_skills"`
	Size               []int32          `json:"size"`
	TimeWindows        []TimeWindow     `json:"time_windows"`
	Type               *ServiceTypeEnum `json:"type"`
}
