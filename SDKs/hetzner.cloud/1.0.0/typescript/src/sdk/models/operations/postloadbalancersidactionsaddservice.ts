import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsAddServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/** 
 * Additional configuration for protocol http
**/
export class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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

export enum PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
}


// PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck
/** 
 * Service health check
**/
export class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;

  @Metadata({ data: "json, name=interval" })
  interval: number;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;
}


// PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp
/** 
 * Configuration option for protocols http and https
**/
export class PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp extends SpeakeasyBase {
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

export enum PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum {
    Tcp = "tcp"
,    Http = "http"
,    Https = "https"
}


export class PostLoadBalancersIdActionsAddServiceLoadBalancerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_port" })
  destinationPort: number;

  @Metadata({ data: "json, name=health_check" })
  healthCheck: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceLoadBalancerServiceHealthCheck;

  @Metadata({ data: "json, name=http" })
  http?: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceHttp;

  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostLoadBalancersIdActionsAddServiceLoadBalancerServiceProtocolEnum;

  @Metadata({ data: "json, name=proxyprotocol" })
  proxyprotocol: boolean;
}


export class PostLoadBalancersIdActionsAddServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsAddServicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsAddServiceLoadBalancerService;
}


// PostLoadBalancersIdActionsAddServiceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsAddServiceActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsAddServiceActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsAddServiceActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsAddServiceActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsAddServiceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsAddServiceActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsAddServiceActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsAddServiceActionResponseAction;
}


export class PostLoadBalancersIdActionsAddServiceResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsAddServiceActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
