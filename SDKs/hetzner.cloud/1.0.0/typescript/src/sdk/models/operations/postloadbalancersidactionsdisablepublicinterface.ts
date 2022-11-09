import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsDisablePublicInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsDisablePublicInterfacePathParams;
}


// PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
