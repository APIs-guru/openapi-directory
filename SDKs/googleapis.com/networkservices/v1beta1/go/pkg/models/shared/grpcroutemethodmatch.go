package shared

type GrpcRouteMethodMatchTypeEnum string

const (
	GrpcRouteMethodMatchTypeEnumTypeUnspecified   GrpcRouteMethodMatchTypeEnum = "TYPE_UNSPECIFIED"
	GrpcRouteMethodMatchTypeEnumExact             GrpcRouteMethodMatchTypeEnum = "EXACT"
	GrpcRouteMethodMatchTypeEnumRegularExpression GrpcRouteMethodMatchTypeEnum = "REGULAR_EXPRESSION"
)

type GrpcRouteMethodMatch struct {
	CaseSensitive *bool                         `json:"caseSensitive"`
	GrpcMethod    *string                       `json:"grpcMethod"`
	GrpcService   *string                       `json:"grpcService"`
	Type          *GrpcRouteMethodMatchTypeEnum `json:"type"`
}
