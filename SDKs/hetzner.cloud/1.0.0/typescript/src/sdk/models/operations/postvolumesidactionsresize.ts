import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostVolumesIdActionsResizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostVolumesIdActionsResizeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size: number;
}


export class PostVolumesIdActionsResizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVolumesIdActionsResizePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostVolumesIdActionsResizeRequestBody;
}


// PostVolumesIdActionsResizeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumesIdActionsResizeActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumesIdActionsResizeActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumesIdActionsResizeActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostVolumesIdActionsResizeActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostVolumesIdActionsResizeActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostVolumesIdActionsResizeActionResponseActionResources })
  resources: PostVolumesIdActionsResizeActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostVolumesIdActionsResizeActionResponseActionStatusEnum;
}


export class PostVolumesIdActionsResizeActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostVolumesIdActionsResizeActionResponseAction;
}


export class PostVolumesIdActionsResizeResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostVolumesIdActionsResizeActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
