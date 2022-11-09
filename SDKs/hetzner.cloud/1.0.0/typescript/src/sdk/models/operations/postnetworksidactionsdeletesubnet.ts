import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNetworksIdActionsDeleteSubnetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_range" })
  ipRange: string;
}


export class PostNetworksIdActionsDeleteSubnetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNetworksIdActionsDeleteSubnetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest;
}


// PostNetworksIdActionsDeleteSubnetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsDeleteSubnetActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsDeleteSubnetActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostNetworksIdActionsDeleteSubnetActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostNetworksIdActionsDeleteSubnetActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostNetworksIdActionsDeleteSubnetActionResponseActionResources })
  resources: PostNetworksIdActionsDeleteSubnetActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsDeleteSubnetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostNetworksIdActionsDeleteSubnetActionResponseAction;
}


export class PostNetworksIdActionsDeleteSubnetResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostNetworksIdActionsDeleteSubnetActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
