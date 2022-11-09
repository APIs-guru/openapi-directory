import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNetworksIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete?: boolean;
}


export class PostNetworksIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNetworksIdActionsChangeProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsChangeProtectionChangeProtectionRequest;
}


// PostNetworksIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostNetworksIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostNetworksIdActionsChangeProtectionActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostNetworksIdActionsChangeProtectionActionResponseActionResources })
  resources: PostNetworksIdActionsChangeProtectionActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostNetworksIdActionsChangeProtectionActionResponseAction;
}


export class PostNetworksIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostNetworksIdActionsChangeProtectionActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
