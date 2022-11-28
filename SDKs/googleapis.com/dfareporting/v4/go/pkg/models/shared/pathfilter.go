package shared

type PathFilterPathMatchPositionEnum string

const (
	PathFilterPathMatchPositionEnumPathMatchPositionUnspecified PathFilterPathMatchPositionEnum = "PATH_MATCH_POSITION_UNSPECIFIED"
	PathFilterPathMatchPositionEnumAny                          PathFilterPathMatchPositionEnum = "ANY"
	PathFilterPathMatchPositionEnumFirst                        PathFilterPathMatchPositionEnum = "FIRST"
	PathFilterPathMatchPositionEnumLast                         PathFilterPathMatchPositionEnum = "LAST"
)

// PathFilter
// Represents a DfaReporting path filter.
type PathFilter struct {
	EventFilters      []EventFilter                    `json:"eventFilters,omitempty"`
	Kind              *string                          `json:"kind,omitempty"`
	PathMatchPosition *PathFilterPathMatchPositionEnum `json:"pathMatchPosition,omitempty"`
}
