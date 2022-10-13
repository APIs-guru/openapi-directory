package shared

type GrpcRouteHeaderMatchTypeEnum string

const (
	GrpcRouteHeaderMatchTypeEnumTypeUnspecified   GrpcRouteHeaderMatchTypeEnum = "TYPE_UNSPECIFIED"
	GrpcRouteHeaderMatchTypeEnumExact             GrpcRouteHeaderMatchTypeEnum = "EXACT"
	GrpcRouteHeaderMatchTypeEnumRegularExpression GrpcRouteHeaderMatchTypeEnum = "REGULAR_EXPRESSION"
)

type GrpcRouteHeaderMatch struct {
	Key   *string                       `json:"key"`
	Type  *GrpcRouteHeaderMatchTypeEnum `json:"type"`
	Value *string                       `json:"value"`
}
