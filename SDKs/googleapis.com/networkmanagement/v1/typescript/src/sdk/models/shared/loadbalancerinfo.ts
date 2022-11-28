import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerBackend } from "./loadbalancerbackend";


export enum LoadBalancerInfoBackendTypeEnum {
    BackendTypeUnspecified = "BACKEND_TYPE_UNSPECIFIED",
    BackendService = "BACKEND_SERVICE",
    TargetPool = "TARGET_POOL",
    TargetInstance = "TARGET_INSTANCE"
}

export enum LoadBalancerInfoLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED",
    InternalTcpUdp = "INTERNAL_TCP_UDP",
    NetworkTcpUdp = "NETWORK_TCP_UDP",
    HttpProxy = "HTTP_PROXY",
    TcpProxy = "TCP_PROXY",
    SslProxy = "SSL_PROXY"
}


// LoadBalancerInfo
/** 
 * For display only. Metadata associated with a load balancer.
**/
export class LoadBalancerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendType" })
  backendType?: LoadBalancerInfoBackendTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=backendUri" })
  backendUri?: string;

  @SpeakeasyMetadata({ data: "json, name=backends", elemType: LoadBalancerBackend })
  backends?: LoadBalancerBackend[];

  @SpeakeasyMetadata({ data: "json, name=healthCheckUri" })
  healthCheckUri?: string;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerType" })
  loadBalancerType?: LoadBalancerInfoLoadBalancerTypeEnum;
}
