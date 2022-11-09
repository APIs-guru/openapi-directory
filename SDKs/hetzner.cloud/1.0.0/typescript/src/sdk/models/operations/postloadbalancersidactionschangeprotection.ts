import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete?: boolean;
}


export class PostLoadBalancersIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsChangeProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsChangeProtectionRequestBody;
}


// PostLoadBalancersIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsChangeProtectionActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources })
  resources: PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsChangeProtectionActionResponseAction;
}


export class PostLoadBalancersIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsChangeProtectionActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
