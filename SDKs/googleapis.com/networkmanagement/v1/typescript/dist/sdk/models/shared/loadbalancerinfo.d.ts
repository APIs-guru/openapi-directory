import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerBackend } from "./loadbalancerbackend";
export declare enum LoadBalancerInfoBackendTypeEnum {
    BackendTypeUnspecified = "BACKEND_TYPE_UNSPECIFIED",
    BackendService = "BACKEND_SERVICE",
    TargetPool = "TARGET_POOL",
    TargetInstance = "TARGET_INSTANCE"
}
export declare enum LoadBalancerInfoLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED",
    InternalTcpUdp = "INTERNAL_TCP_UDP",
    NetworkTcpUdp = "NETWORK_TCP_UDP",
    HttpProxy = "HTTP_PROXY",
    TcpProxy = "TCP_PROXY",
    SslProxy = "SSL_PROXY"
}
/**
 * For display only. Metadata associated with a load balancer.
**/
export declare class LoadBalancerInfo extends SpeakeasyBase {
    backendType?: LoadBalancerInfoBackendTypeEnum;
    backendUri?: string;
    backends?: LoadBalancerBackend[];
    healthCheckUri?: string;
    loadBalancerType?: LoadBalancerInfoLoadBalancerTypeEnum;
}
