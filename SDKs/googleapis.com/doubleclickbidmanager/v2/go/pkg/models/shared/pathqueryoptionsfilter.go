package shared

type PathQueryOptionsFilterMatchEnum string

const (
	PathQueryOptionsFilterMatchEnumUnknown            PathQueryOptionsFilterMatchEnum = "UNKNOWN"
	PathQueryOptionsFilterMatchEnumExact              PathQueryOptionsFilterMatchEnum = "EXACT"
	PathQueryOptionsFilterMatchEnumPartial            PathQueryOptionsFilterMatchEnum = "PARTIAL"
	PathQueryOptionsFilterMatchEnumBeginsWith         PathQueryOptionsFilterMatchEnum = "BEGINS_WITH"
	PathQueryOptionsFilterMatchEnumWildcardExpression PathQueryOptionsFilterMatchEnum = "WILDCARD_EXPRESSION"
)

// PathQueryOptionsFilter
// Dimension filter on path events.
type PathQueryOptionsFilter struct {
	Filter *string                          `json:"filter,omitempty"`
	Match  *PathQueryOptionsFilterMatchEnum `json:"match,omitempty"`
	Values []string                         `json:"values,omitempty"`
}
