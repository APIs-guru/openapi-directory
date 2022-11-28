import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsRebuildPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsRebuildRebuildServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image: string;
}


// PostServersIdActionsRebuild201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsRebuild201ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsRebuild201ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsRebuild201ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsRebuild201ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsRebuild201ApplicationJsonActionResources })
  resources: PostServersIdActionsRebuild201ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum;
}


export class PostServersIdActionsRebuild201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PostServersIdActionsRebuild201ApplicationJsonAction;

  @SpeakeasyMetadata({ data: "json, name=root_password" })
  rootPassword?: string;
}


export class PostServersIdActionsRebuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsRebuildPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsRebuildRebuildServerRequest;
}


export class PostServersIdActionsRebuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postServersIdActionsRebuild201ApplicationJsonObject?: PostServersIdActionsRebuild201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
