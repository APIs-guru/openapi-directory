import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsDeleteServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsDeleteServiceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen_port" })
  listenPort: number;
}


export class PostLoadBalancersIdActionsDeleteServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsDeleteServicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsDeleteServiceRequestBody;
}


// PostLoadBalancersIdActionsDeleteServiceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsDeleteServiceActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsDeleteServiceActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsDeleteServiceActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsDeleteServiceActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsDeleteServiceActionResponseAction;
}


export class PostLoadBalancersIdActionsDeleteServiceResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsDeleteServiceActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
