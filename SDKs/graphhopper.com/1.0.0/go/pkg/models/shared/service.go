package shared




type ServiceTypeEnum string

const (
    ServiceTypeEnumService ServiceTypeEnum = "service"
ServiceTypeEnumPickup ServiceTypeEnum = "pickup"
ServiceTypeEnumDelivery ServiceTypeEnum = "delivery"
)


type Service struct {
    Address *Address `json:"address,omitempty"`
    AllowedVehicles []string `json:"allowed_vehicles,omitempty"`
    DisallowedVehicles []string `json:"disallowed_vehicles,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    Group *string `json:"group,omitempty"`
    ID string `json:"id"`
    MaxTimeInVehicle *int64 `json:"max_time_in_vehicle,omitempty"`
    Name *string `json:"name,omitempty"`
    PreparationTime *int64 `json:"preparation_time,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    RequiredSkills []string `json:"required_skills,omitempty"`
    Size []int32 `json:"size,omitempty"`
    TimeWindows []TimeWindow `json:"time_windows,omitempty"`
    Type *ServiceTypeEnum `json:"type,omitempty"`
    
}

