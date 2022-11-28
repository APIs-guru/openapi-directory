import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsDisablePublicInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsDisablePublicInterfacePathParams;
}


export class PostLoadBalancersIdActionsDisablePublicInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
