import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsUpdateServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: string;

  @SpeakeasyMetadata({ data: "json, name=status_codes" })
  statusCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=tls" })
  tls?: boolean;
}

export enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}


// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}


// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates" })
  certificates?: number[];

  @SpeakeasyMetadata({ data: "json, name=cookie_lifetime" })
  cookieLifetime: number;

  @SpeakeasyMetadata({ data: "json, name=cookie_name" })
  cookieName: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_http" })
  redirectHttp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sticky_sessions" })
  stickySessions?: boolean;
}

export enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}


export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp;

  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


// PostLoadBalancersIdActionsUpdateServiceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsUpdateServiceActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsUpdateServiceActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsUpdateServiceActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsUpdateServiceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsUpdateServiceActionResponseAction;
}


export class PostLoadBalancersIdActionsUpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsUpdateServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
}


export class PostLoadBalancersIdActionsUpdateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsUpdateServiceActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
