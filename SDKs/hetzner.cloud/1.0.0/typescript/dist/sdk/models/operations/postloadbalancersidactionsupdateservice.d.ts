import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsUpdateServicePathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Additional configuration for protocol http
**/
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    domain: string;
    path: string;
    response?: string;
    statusCodes?: string[];
    tls?: boolean;
}
export declare enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
**/
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    interval: number;
    port: number;
    protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    retries: number;
    timeout: number;
}
/**
 * Configuration option for protocols http and https
**/
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp extends SpeakeasyBase {
    certificates?: number[];
    cookieLifetime: number;
    cookieName: string;
    redirectHttp?: boolean;
    stickySessions?: boolean;
}
export declare enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PostLoadBalancersIdActionsUpdateServiceLoadBalancerService extends SpeakeasyBase {
    destinationPort: number;
    healthCheck: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;
    http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp;
    listenPort: number;
    protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum;
    proxyprotocol: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsUpdateServiceActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsUpdateServiceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsUpdateServiceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsUpdateServiceRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsUpdateServicePathParams;
    request?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
}
export declare class PostLoadBalancersIdActionsUpdateServiceResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsUpdateServiceActionResponse;
    contentType: string;
    statusCode: number;
}
