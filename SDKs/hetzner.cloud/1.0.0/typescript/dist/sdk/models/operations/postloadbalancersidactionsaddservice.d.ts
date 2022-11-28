import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsAddServicePathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Additional configuration for protocol http
**/
export declare class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    domain: string;
    path: string;
    response?: string;
    statusCodes?: string[];
    tls?: boolean;
}
export declare enum PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
**/
export declare class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    http?: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    interval: number;
    port: number;
    protocol: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    retries: number;
    timeout: number;
}
/**
 * Configuration option for protocols http and https
**/
export declare class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp extends SpeakeasyBase {
    certificates?: number[];
    cookieLifetime: number;
    cookieName: string;
    redirectHttp?: boolean;
    stickySessions?: boolean;
}
export declare enum PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PostLoadBalancersIdActionsAddServiceLoadBalancerService extends SpeakeasyBase {
    destinationPort: number;
    healthCheck: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
    http?: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp;
    listenPort: number;
    protocol: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum;
    proxyprotocol: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsAddServiceActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsAddServiceActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsAddServiceActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsAddServiceActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsAddServiceActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsAddServiceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsAddServiceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsAddServiceRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsAddServicePathParams;
    request?: PostLoadBalancersIdActionsAddServiceLoadBalancerService;
}
export declare class PostLoadBalancersIdActionsAddServiceResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsAddServiceActionResponse;
    contentType: string;
    statusCode: number;
}
