import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNetworksIdActionsChangeIpRangePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_range" })
  ipRange: string;
}


export class PostNetworksIdActionsChangeIpRangeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNetworksIdActionsChangeIpRangePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest;
}


// PostNetworksIdActionsChangeIpRangeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsChangeIpRangeActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsChangeIpRangeActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostNetworksIdActionsChangeIpRangeActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostNetworksIdActionsChangeIpRangeActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostNetworksIdActionsChangeIpRangeActionResponseActionResources })
  resources: PostNetworksIdActionsChangeIpRangeActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsChangeIpRangeActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostNetworksIdActionsChangeIpRangeActionResponseAction;
}


export class PostNetworksIdActionsChangeIpRangeResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostNetworksIdActionsChangeIpRangeActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
