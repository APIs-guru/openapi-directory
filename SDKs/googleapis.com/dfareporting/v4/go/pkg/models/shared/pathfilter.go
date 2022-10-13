package shared

type PathFilterPathMatchPositionEnum string

const (
	PathFilterPathMatchPositionEnumPathMatchPositionUnspecified PathFilterPathMatchPositionEnum = "PATH_MATCH_POSITION_UNSPECIFIED"
	PathFilterPathMatchPositionEnumAny                          PathFilterPathMatchPositionEnum = "ANY"
	PathFilterPathMatchPositionEnumFirst                        PathFilterPathMatchPositionEnum = "FIRST"
	PathFilterPathMatchPositionEnumLast                         PathFilterPathMatchPositionEnum = "LAST"
)

type PathFilter struct {
	EventFilters      []EventFilter                    `json:"eventFilters"`
	Kind              *string                          `json:"kind"`
	PathMatchPosition *PathFilterPathMatchPositionEnum `json:"pathMatchPosition"`
}
