package shared




type LoadBalancerInfoBackendTypeEnum string

const (
    LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified LoadBalancerInfoBackendTypeEnum = "BACKEND_TYPE_UNSPECIFIED"
LoadBalancerInfoBackendTypeEnumBackendService LoadBalancerInfoBackendTypeEnum = "BACKEND_SERVICE"
LoadBalancerInfoBackendTypeEnumTargetPool LoadBalancerInfoBackendTypeEnum = "TARGET_POOL"
LoadBalancerInfoBackendTypeEnumTargetInstance LoadBalancerInfoBackendTypeEnum = "TARGET_INSTANCE"
)



type LoadBalancerInfoLoadBalancerTypeEnum string

const (
    LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified LoadBalancerInfoLoadBalancerTypeEnum = "LOAD_BALANCER_TYPE_UNSPECIFIED"
LoadBalancerInfoLoadBalancerTypeEnumInternalTcpudp LoadBalancerInfoLoadBalancerTypeEnum = "INTERNAL_TCP_UDP"
LoadBalancerInfoLoadBalancerTypeEnumNetworkTcpudp LoadBalancerInfoLoadBalancerTypeEnum = "NETWORK_TCP_UDP"
LoadBalancerInfoLoadBalancerTypeEnumHTTPProxy LoadBalancerInfoLoadBalancerTypeEnum = "HTTP_PROXY"
LoadBalancerInfoLoadBalancerTypeEnumTCPProxy LoadBalancerInfoLoadBalancerTypeEnum = "TCP_PROXY"
LoadBalancerInfoLoadBalancerTypeEnumSslProxy LoadBalancerInfoLoadBalancerTypeEnum = "SSL_PROXY"
)


type LoadBalancerInfo struct {
    BackendType *LoadBalancerInfoBackendTypeEnum `json:"backendType,omitempty"`
    BackendURI *string `json:"backendUri,omitempty"`
    Backends []LoadBalancerBackend `json:"backends,omitempty"`
    HealthCheckURI *string `json:"healthCheckUri,omitempty"`
    LoadBalancerType *LoadBalancerInfoLoadBalancerTypeEnum `json:"loadBalancerType,omitempty"`
    
}

