import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostVolumesIdActionsResizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostVolumesIdActionsResizeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}


// PostVolumesIdActionsResizeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumesIdActionsResizeActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumesIdActionsResizeActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumesIdActionsResizeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostVolumesIdActionsResizeActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostVolumesIdActionsResizeActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumesIdActionsResizeActionResponseActionResources })
  resources: PostVolumesIdActionsResizeActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostVolumesIdActionsResizeActionResponseActionStatusEnum;
}


export class PostVolumesIdActionsResizeActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostVolumesIdActionsResizeActionResponseAction;
}


export class PostVolumesIdActionsResizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVolumesIdActionsResizePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostVolumesIdActionsResizeRequestBody;
}


export class PostVolumesIdActionsResizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostVolumesIdActionsResizeActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
