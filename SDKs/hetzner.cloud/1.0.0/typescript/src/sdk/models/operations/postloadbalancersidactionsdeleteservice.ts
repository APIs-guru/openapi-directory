import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsDeleteServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsDeleteServiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen_port" })
  listenPort: number;
}


// PostLoadBalancersIdActionsDeleteServiceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsDeleteServiceActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsDeleteServiceActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsDeleteServiceActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsDeleteServiceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsDeleteServiceActionResponseAction;
}


export class PostLoadBalancersIdActionsDeleteServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsDeleteServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsDeleteServiceRequestBody;
}


export class PostLoadBalancersIdActionsDeleteServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsDeleteServiceActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
