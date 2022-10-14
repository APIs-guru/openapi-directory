package shared

type GatewayTypeEnum string

const (
	GatewayTypeEnumTypeUnspecified  GatewayTypeEnum = "TYPE_UNSPECIFIED"
	GatewayTypeEnumOpenMesh         GatewayTypeEnum = "OPEN_MESH"
	GatewayTypeEnumSecureWebGateway GatewayTypeEnum = "SECURE_WEB_GATEWAY"
)

type Gateway struct {
	CreateTime      *string           `json:"createTime,omitempty"`
	Description     *string           `json:"description,omitempty"`
	Labels          map[string]string `json:"labels,omitempty"`
	Name            *string           `json:"name,omitempty"`
	Ports           []int32           `json:"ports,omitempty"`
	Scope           *string           `json:"scope,omitempty"`
	SelfLink        *string           `json:"selfLink,omitempty"`
	ServerTLSPolicy *string           `json:"serverTlsPolicy,omitempty"`
	Type            *GatewayTypeEnum  `json:"type,omitempty"`
	UpdateTime      *string           `json:"updateTime,omitempty"`
}
