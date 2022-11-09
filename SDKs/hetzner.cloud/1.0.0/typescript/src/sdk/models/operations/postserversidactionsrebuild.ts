import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsRebuildPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsRebuildRebuildServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image: string;
}


export class PostServersIdActionsRebuildRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsRebuildPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsRebuildRebuildServerRequest;
}


// PostServersIdActionsRebuild201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsRebuild201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsRebuild201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsRebuild201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsRebuild201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsRebuild201ApplicationJsonActionResources })
  resources: PostServersIdActionsRebuild201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum;
}


export class PostServersIdActionsRebuild201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: PostServersIdActionsRebuild201ApplicationJsonAction;

  @Metadata({ data: "json, name=root_password" })
  rootPassword?: string;
}


export class PostServersIdActionsRebuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postServersIdActionsRebuild201ApplicationJsonObject?: PostServersIdActionsRebuild201ApplicationJson;

  @Metadata()
  statusCode: number;
}
