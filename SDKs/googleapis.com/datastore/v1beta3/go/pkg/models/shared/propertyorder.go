package shared

type PropertyOrderDirectionEnum string

const (
	PropertyOrderDirectionEnumDirectionUnspecified PropertyOrderDirectionEnum = "DIRECTION_UNSPECIFIED"
	PropertyOrderDirectionEnumAscending            PropertyOrderDirectionEnum = "ASCENDING"
	PropertyOrderDirectionEnumDescending           PropertyOrderDirectionEnum = "DESCENDING"
)

type PropertyOrder struct {
	Direction *PropertyOrderDirectionEnum `json:"direction"`
	Property  *PropertyReference          `json:"property"`
}
