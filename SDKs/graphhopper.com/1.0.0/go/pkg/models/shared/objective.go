package shared




type ObjectiveTypeEnum string

const (
    ObjectiveTypeEnumMin ObjectiveTypeEnum = "min"
ObjectiveTypeEnumMinMax ObjectiveTypeEnum = "min-max"
)



type ObjectiveValueEnum string

const (
    ObjectiveValueEnumCompletionTime ObjectiveValueEnum = "completion_time"
ObjectiveValueEnumTransportTime ObjectiveValueEnum = "transport_time"
ObjectiveValueEnumVehicles ObjectiveValueEnum = "vehicles"
ObjectiveValueEnumActivities ObjectiveValueEnum = "activities"
)


type Objective struct {
    Type ObjectiveTypeEnum `json:"type"`
    Value ObjectiveValueEnum `json:"value"`
    
}

