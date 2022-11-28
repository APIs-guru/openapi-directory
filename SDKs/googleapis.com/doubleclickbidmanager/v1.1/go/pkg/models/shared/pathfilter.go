package shared

type PathFilterPathMatchPositionEnum string

const (
	PathFilterPathMatchPositionEnumAny   PathFilterPathMatchPositionEnum = "ANY"
	PathFilterPathMatchPositionEnumFirst PathFilterPathMatchPositionEnum = "FIRST"
	PathFilterPathMatchPositionEnumLast  PathFilterPathMatchPositionEnum = "LAST"
)

// PathFilter
// Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
type PathFilter struct {
	EventFilters      []EventFilter                    `json:"eventFilters,omitempty"`
	PathMatchPosition *PathFilterPathMatchPositionEnum `json:"pathMatchPosition,omitempty"`
}
