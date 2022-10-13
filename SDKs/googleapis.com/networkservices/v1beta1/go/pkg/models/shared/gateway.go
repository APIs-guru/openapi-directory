package shared

type GatewayTypeEnum string

const (
	GatewayTypeEnumTypeUnspecified  GatewayTypeEnum = "TYPE_UNSPECIFIED"
	GatewayTypeEnumOpenMesh         GatewayTypeEnum = "OPEN_MESH"
	GatewayTypeEnumSecureWebGateway GatewayTypeEnum = "SECURE_WEB_GATEWAY"
)

type Gateway struct {
	CreateTime      *string           `json:"createTime"`
	Description     *string           `json:"description"`
	Labels          map[string]string `json:"labels"`
	Name            *string           `json:"name"`
	Ports           []int32           `json:"ports"`
	Scope           *string           `json:"scope"`
	SelfLink        *string           `json:"selfLink"`
	ServerTLSPolicy *string           `json:"serverTlsPolicy"`
	Type            *GatewayTypeEnum  `json:"type"`
	UpdateTime      *string           `json:"updateTime"`
}
