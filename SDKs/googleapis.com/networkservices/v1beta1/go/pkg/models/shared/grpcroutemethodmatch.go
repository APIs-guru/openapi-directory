package shared

type GrpcRouteMethodMatchTypeEnum string

const (
	GrpcRouteMethodMatchTypeEnumTypeUnspecified   GrpcRouteMethodMatchTypeEnum = "TYPE_UNSPECIFIED"
	GrpcRouteMethodMatchTypeEnumExact             GrpcRouteMethodMatchTypeEnum = "EXACT"
	GrpcRouteMethodMatchTypeEnumRegularExpression GrpcRouteMethodMatchTypeEnum = "REGULAR_EXPRESSION"
)

type GrpcRouteMethodMatch struct {
	CaseSensitive *bool                         `json:"caseSensitive,omitempty"`
	GrpcMethod    *string                       `json:"grpcMethod,omitempty"`
	GrpcService   *string                       `json:"grpcService,omitempty"`
	Type          *GrpcRouteMethodMatchTypeEnum `json:"type,omitempty"`
}
