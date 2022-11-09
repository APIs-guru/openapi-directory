import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsUpdateServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=response" })
  response?: string;

  @Metadata({ data: "json, name=status_codes" })
  statusCodes?: string[];

  @Metadata({ data: "json, name=tls" })
  tls?: boolean;
}

export enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
}


// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @Metadata({ data: "json, name=interval" })
  interval: number;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}


// PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates" })
  certificates?: number[];

  @Metadata({ data: "json, name=cookie_lifetime" })
  cookieLifetime: number;

  @Metadata({ data: "json, name=cookie_name" })
  cookieName: string;

  @Metadata({ data: "json, name=redirect_http" })
  redirectHttp?: boolean;

  @Metadata({ data: "json, name=sticky_sessions" })
  stickySessions?: boolean;
}

export enum PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
,    Https = "https"
}


export class PostLoadBalancersIdActionsUpdateServiceLoadBalancerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @Metadata({ data: "json, name=health_check" })
  healthCheck: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceHttp;

  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersIdActionsUpdateServiceLoadBalancerServiceProtocolEnum;

  @Metadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PostLoadBalancersIdActionsUpdateServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsUpdateServicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsUpdateServiceLoadBalancerService;
}


// PostLoadBalancersIdActionsUpdateServiceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsUpdateServiceActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsUpdateServiceActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsUpdateServiceActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsUpdateServiceActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsUpdateServiceActionResponseAction;
}


export class PostLoadBalancersIdActionsUpdateServiceResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsUpdateServiceActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
