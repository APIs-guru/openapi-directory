package shared

type EndpointPolicyTypeEnum string

const (
	EndpointPolicyTypeEnumEndpointPolicyTypeUnspecified EndpointPolicyTypeEnum = "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
	EndpointPolicyTypeEnumSidecarProxy                  EndpointPolicyTypeEnum = "SIDECAR_PROXY"
	EndpointPolicyTypeEnumGrpcServer                    EndpointPolicyTypeEnum = "GRPC_SERVER"
)

type EndpointPolicy struct {
	AuthorizationPolicy *string                 `json:"authorizationPolicy"`
	ClientTLSPolicy     *string                 `json:"clientTlsPolicy"`
	CreateTime          *string                 `json:"createTime"`
	Description         *string                 `json:"description"`
	EndpointMatcher     *EndpointMatcher        `json:"endpointMatcher"`
	Labels              map[string]string       `json:"labels"`
	Name                *string                 `json:"name"`
	ServerTLSPolicy     *string                 `json:"serverTlsPolicy"`
	TrafficPortSelector *TrafficPortSelector    `json:"trafficPortSelector"`
	Type                *EndpointPolicyTypeEnum `json:"type"`
	UpdateTime          *string                 `json:"updateTime"`
}
