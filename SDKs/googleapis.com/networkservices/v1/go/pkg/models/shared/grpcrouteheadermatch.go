package shared




type GrpcRouteHeaderMatchTypeEnum string

const (
    GrpcRouteHeaderMatchTypeEnumTypeUnspecified GrpcRouteHeaderMatchTypeEnum = "TYPE_UNSPECIFIED"
GrpcRouteHeaderMatchTypeEnumExact GrpcRouteHeaderMatchTypeEnum = "EXACT"
GrpcRouteHeaderMatchTypeEnumRegularExpression GrpcRouteHeaderMatchTypeEnum = "REGULAR_EXPRESSION"
)


type GrpcRouteHeaderMatch struct {
    Key *string `json:"key,omitempty"`
    Type *GrpcRouteHeaderMatchTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

