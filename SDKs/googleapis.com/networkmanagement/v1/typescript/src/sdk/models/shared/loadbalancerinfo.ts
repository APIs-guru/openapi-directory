import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoadBalancerBackend } from "./loadbalancerbackend";

export enum LoadBalancerInfoBackendTypeEnum {
    BackendTypeUnspecified = "BACKEND_TYPE_UNSPECIFIED"
,    BackendService = "BACKEND_SERVICE"
,    TargetPool = "TARGET_POOL"
,    TargetInstance = "TARGET_INSTANCE"
}

export enum LoadBalancerInfoLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED"
,    InternalTcpUdp = "INTERNAL_TCP_UDP"
,    NetworkTcpUdp = "NETWORK_TCP_UDP"
,    HttpProxy = "HTTP_PROXY"
,    TcpProxy = "TCP_PROXY"
,    SslProxy = "SSL_PROXY"
}


// LoadBalancerInfo
/** 
 * For display only. Metadata associated with a load balancer.
**/
export class LoadBalancerInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendType" })
  backendType?: LoadBalancerInfoBackendTypeEnum;

  @Metadata({ data: "json, name=backendUri" })
  backendUri?: string;

  @Metadata({ data: "json, name=backends", elemType: shared.LoadBalancerBackend })
  backends?: LoadBalancerBackend[];

  @Metadata({ data: "json, name=healthCheckUri" })
  healthCheckUri?: string;

  @Metadata({ data: "json, name=loadBalancerType" })
  loadBalancerType?: LoadBalancerInfoLoadBalancerTypeEnum;
}
