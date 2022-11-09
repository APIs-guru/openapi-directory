import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsChangeAlgorithmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}


export class PostLoadBalancersIdActionsChangeAlgorithmRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum;
}


export class PostLoadBalancersIdActionsChangeAlgorithmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsChangeAlgorithmPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsChangeAlgorithmRequestBody;
}


// PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources })
  resources: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsChangeAlgorithmActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction;
}


export class PostLoadBalancersIdActionsChangeAlgorithmResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsChangeAlgorithmActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
