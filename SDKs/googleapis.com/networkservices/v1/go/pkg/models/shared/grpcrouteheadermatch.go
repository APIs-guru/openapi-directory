package shared

type GrpcRouteHeaderMatchTypeEnum string

const (
	GrpcRouteHeaderMatchTypeEnumTypeUnspecified   GrpcRouteHeaderMatchTypeEnum = "TYPE_UNSPECIFIED"
	GrpcRouteHeaderMatchTypeEnumExact             GrpcRouteHeaderMatchTypeEnum = "EXACT"
	GrpcRouteHeaderMatchTypeEnumRegularExpression GrpcRouteHeaderMatchTypeEnum = "REGULAR_EXPRESSION"
)

// GrpcRouteHeaderMatch
// A match against a collection of headers.
type GrpcRouteHeaderMatch struct {
	Key   *string                       `json:"key,omitempty"`
	Type  *GrpcRouteHeaderMatchTypeEnum `json:"type,omitempty"`
	Value *string                       `json:"value,omitempty"`
}
