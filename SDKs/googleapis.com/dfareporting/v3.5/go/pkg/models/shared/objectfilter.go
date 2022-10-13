package shared

type ObjectFilterStatusEnum string

const (
	ObjectFilterStatusEnumNone     ObjectFilterStatusEnum = "NONE"
	ObjectFilterStatusEnumAssigned ObjectFilterStatusEnum = "ASSIGNED"
	ObjectFilterStatusEnumAll      ObjectFilterStatusEnum = "ALL"
)

type ObjectFilter struct {
	Kind      *string                 `json:"kind"`
	ObjectIds []string                `json:"objectIds"`
	Status    *ObjectFilterStatusEnum `json:"status"`
}
