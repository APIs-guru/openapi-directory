package shared




type PropertyOrderDirectionEnum string

const (
    PropertyOrderDirectionEnumDirectionUnspecified PropertyOrderDirectionEnum = "DIRECTION_UNSPECIFIED"
PropertyOrderDirectionEnumAscending PropertyOrderDirectionEnum = "ASCENDING"
PropertyOrderDirectionEnumDescending PropertyOrderDirectionEnum = "DESCENDING"
)


type PropertyOrder struct {
    Direction *PropertyOrderDirectionEnum `json:"direction,omitempty"`
    Property *PropertyReference `json:"property,omitempty"`
    
}

