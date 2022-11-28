import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNetworksIdActionsChangeIpRangePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange: string;
}


// PostNetworksIdActionsChangeIpRangeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsChangeIpRangeActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsChangeIpRangeActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostNetworksIdActionsChangeIpRangeActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostNetworksIdActionsChangeIpRangeActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsChangeIpRangeActionResponseActionResources })
  resources: PostNetworksIdActionsChangeIpRangeActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsChangeIpRangeActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostNetworksIdActionsChangeIpRangeActionResponseAction;
}


export class PostNetworksIdActionsChangeIpRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostNetworksIdActionsChangeIpRangePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest;
}


export class PostNetworksIdActionsChangeIpRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostNetworksIdActionsChangeIpRangeActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
