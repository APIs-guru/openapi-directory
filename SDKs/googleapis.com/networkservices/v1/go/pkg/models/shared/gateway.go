package shared

type GatewayTypeEnum string

const (
	GatewayTypeEnumTypeUnspecified  GatewayTypeEnum = "TYPE_UNSPECIFIED"
	GatewayTypeEnumOpenMesh         GatewayTypeEnum = "OPEN_MESH"
	GatewayTypeEnumSecureWebGateway GatewayTypeEnum = "SECURE_WEB_GATEWAY"
)

// Gateway
// Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
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

// GatewayInput
// Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
type GatewayInput struct {
	Description     *string           `json:"description,omitempty"`
	Labels          map[string]string `json:"labels,omitempty"`
	Name            *string           `json:"name,omitempty"`
	Ports           []int32           `json:"ports,omitempty"`
	Scope           *string           `json:"scope,omitempty"`
	ServerTLSPolicy *string           `json:"serverTlsPolicy,omitempty"`
	Type            *GatewayTypeEnum  `json:"type,omitempty"`
}
