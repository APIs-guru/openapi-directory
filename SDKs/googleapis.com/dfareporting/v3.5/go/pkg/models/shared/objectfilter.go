package shared

type ObjectFilterStatusEnum string

const (
	ObjectFilterStatusEnumNone     ObjectFilterStatusEnum = "NONE"
	ObjectFilterStatusEnumAssigned ObjectFilterStatusEnum = "ASSIGNED"
	ObjectFilterStatusEnumAll      ObjectFilterStatusEnum = "ALL"
)

type ObjectFilter struct {
	Kind      *string                 `json:"kind,omitempty"`
	ObjectIds []string                `json:"objectIds,omitempty"`
	Status    *ObjectFilterStatusEnum `json:"status,omitempty"`
}
