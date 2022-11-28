package shared

type PropertyOrderDirectionEnum string

const (
	PropertyOrderDirectionEnumDirectionUnspecified PropertyOrderDirectionEnum = "DIRECTION_UNSPECIFIED"
	PropertyOrderDirectionEnumAscending            PropertyOrderDirectionEnum = "ASCENDING"
	PropertyOrderDirectionEnumDescending           PropertyOrderDirectionEnum = "DESCENDING"
)

// PropertyOrder
// The desired order for a specific property.
type PropertyOrder struct {
	Direction *PropertyOrderDirectionEnum `json:"direction,omitempty"`
	Property  *PropertyReference          `json:"property,omitempty"`
}
