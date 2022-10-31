package shared




type PathFilterPathMatchPositionEnum string

const (
    PathFilterPathMatchPositionEnumPathMatchPositionUnspecified PathFilterPathMatchPositionEnum = "PATH_MATCH_POSITION_UNSPECIFIED"
PathFilterPathMatchPositionEnumAny PathFilterPathMatchPositionEnum = "ANY"
PathFilterPathMatchPositionEnumFirst PathFilterPathMatchPositionEnum = "FIRST"
PathFilterPathMatchPositionEnumLast PathFilterPathMatchPositionEnum = "LAST"
)


type PathFilter struct {
    EventFilters []EventFilter `json:"eventFilters,omitempty"`
    PathMatchPosition *PathFilterPathMatchPositionEnum `json:"pathMatchPosition,omitempty"`
    
}

