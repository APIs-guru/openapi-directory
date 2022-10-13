package shared

type PathQueryOptionsFilterMatchEnum string

const (
	PathQueryOptionsFilterMatchEnumUnknown            PathQueryOptionsFilterMatchEnum = "UNKNOWN"
	PathQueryOptionsFilterMatchEnumExact              PathQueryOptionsFilterMatchEnum = "EXACT"
	PathQueryOptionsFilterMatchEnumPartial            PathQueryOptionsFilterMatchEnum = "PARTIAL"
	PathQueryOptionsFilterMatchEnumBeginsWith         PathQueryOptionsFilterMatchEnum = "BEGINS_WITH"
	PathQueryOptionsFilterMatchEnumWildcardExpression PathQueryOptionsFilterMatchEnum = "WILDCARD_EXPRESSION"
)

type PathQueryOptionsFilter struct {
	Filter *string                          `json:"filter"`
	Match  *PathQueryOptionsFilterMatchEnum `json:"match"`
	Values []string                         `json:"values"`
}
