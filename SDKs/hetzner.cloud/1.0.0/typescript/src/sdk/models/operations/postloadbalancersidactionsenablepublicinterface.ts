import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsEnablePublicInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources })
  resources: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsEnablePublicInterfacePathParams;
}


export class PostLoadBalancersIdActionsEnablePublicInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
