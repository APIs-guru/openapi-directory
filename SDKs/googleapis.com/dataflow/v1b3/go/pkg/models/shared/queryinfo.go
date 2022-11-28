package shared

type QueryInfoQueryPropertyEnum string

const (
	QueryInfoQueryPropertyEnumQueryPropertyUnspecified QueryInfoQueryPropertyEnum = "QUERY_PROPERTY_UNSPECIFIED"
	QueryInfoQueryPropertyEnumHasUnboundedSource       QueryInfoQueryPropertyEnum = "HAS_UNBOUNDED_SOURCE"
)

// QueryInfo
// Information about a validated query.
type QueryInfo struct {
	QueryProperty []QueryInfoQueryPropertyEnum `json:"queryProperty,omitempty"`
}
