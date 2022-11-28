import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsChangeAlgorithmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}


export class PostLoadBalancersIdActionsChangeAlgorithmRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum;
}


// PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources })
  resources: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsChangeAlgorithmActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction;
}


export class PostLoadBalancersIdActionsChangeAlgorithmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsChangeAlgorithmPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsChangeAlgorithmRequestBody;
}


export class PostLoadBalancersIdActionsChangeAlgorithmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsChangeAlgorithmActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
