package shared

type EndpointPolicyTypeEnum string

const (
	EndpointPolicyTypeEnumEndpointPolicyTypeUnspecified EndpointPolicyTypeEnum = "ENDPOINT_POLICY_TYPE_UNSPECIFIED"
	EndpointPolicyTypeEnumSidecarProxy                  EndpointPolicyTypeEnum = "SIDECAR_PROXY"
	EndpointPolicyTypeEnumGrpcServer                    EndpointPolicyTypeEnum = "GRPC_SERVER"
)

// EndpointPolicyInput
// EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
type EndpointPolicyInput struct {
	AuthorizationPolicy *string                 `json:"authorizationPolicy,omitempty"`
	ClientTLSPolicy     *string                 `json:"clientTlsPolicy,omitempty"`
	Description         *string                 `json:"description,omitempty"`
	EndpointMatcher     *EndpointMatcher        `json:"endpointMatcher,omitempty"`
	Labels              map[string]string       `json:"labels,omitempty"`
	Name                *string                 `json:"name,omitempty"`
	ServerTLSPolicy     *string                 `json:"serverTlsPolicy,omitempty"`
	TrafficPortSelector *TrafficPortSelector    `json:"trafficPortSelector,omitempty"`
	Type                *EndpointPolicyTypeEnum `json:"type,omitempty"`
}

// EndpointPolicy
// EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
type EndpointPolicy struct {
	AuthorizationPolicy *string                 `json:"authorizationPolicy,omitempty"`
	ClientTLSPolicy     *string                 `json:"clientTlsPolicy,omitempty"`
	CreateTime          *string                 `json:"createTime,omitempty"`
	Description         *string                 `json:"description,omitempty"`
	EndpointMatcher     *EndpointMatcher        `json:"endpointMatcher,omitempty"`
	Labels              map[string]string       `json:"labels,omitempty"`
	Name                *string                 `json:"name,omitempty"`
	ServerTLSPolicy     *string                 `json:"serverTlsPolicy,omitempty"`
	TrafficPortSelector *TrafficPortSelector    `json:"trafficPortSelector,omitempty"`
	Type                *EndpointPolicyTypeEnum `json:"type,omitempty"`
	UpdateTime          *string                 `json:"updateTime,omitempty"`
}
