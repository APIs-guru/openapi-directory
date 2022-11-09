import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsEnablePublicInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsEnablePublicInterfacePathParams;
}


// PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
