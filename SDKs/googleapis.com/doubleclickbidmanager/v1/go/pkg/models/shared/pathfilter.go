package shared

type PathFilterPathMatchPositionEnum string

const (
	PathFilterPathMatchPositionEnumAny   PathFilterPathMatchPositionEnum = "ANY"
	PathFilterPathMatchPositionEnumFirst PathFilterPathMatchPositionEnum = "FIRST"
	PathFilterPathMatchPositionEnumLast  PathFilterPathMatchPositionEnum = "LAST"
)

type PathFilter struct {
	EventFilters      []EventFilter                    `json:"eventFilters"`
	PathMatchPosition *PathFilterPathMatchPositionEnum `json:"pathMatchPosition"`
}
