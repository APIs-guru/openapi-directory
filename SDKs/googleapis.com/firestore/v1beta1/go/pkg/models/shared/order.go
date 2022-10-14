package shared

type OrderDirectionEnum string

const (
	OrderDirectionEnumDirectionUnspecified OrderDirectionEnum = "DIRECTION_UNSPECIFIED"
	OrderDirectionEnumAscending            OrderDirectionEnum = "ASCENDING"
	OrderDirectionEnumDescending           OrderDirectionEnum = "DESCENDING"
)

type Order struct {
	Direction *OrderDirectionEnum `json:"direction,omitempty"`
	Field     *FieldReference     `json:"field,omitempty"`
}
