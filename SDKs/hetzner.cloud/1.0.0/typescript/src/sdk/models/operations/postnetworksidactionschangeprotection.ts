import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNetworksIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;
}


// PostNetworksIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostNetworksIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostNetworksIdActionsChangeProtectionActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsChangeProtectionActionResponseActionResources })
  resources: PostNetworksIdActionsChangeProtectionActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostNetworksIdActionsChangeProtectionActionResponseAction;
}


export class PostNetworksIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostNetworksIdActionsChangeProtectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsChangeProtectionChangeProtectionRequest;
}


export class PostNetworksIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostNetworksIdActionsChangeProtectionActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
