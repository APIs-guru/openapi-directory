import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostVolumesIdActionsDetachPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostVolumesIdActionsDetachActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumesIdActionsDetachActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumesIdActionsDetachActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumesIdActionsDetachActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostVolumesIdActionsDetachActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostVolumesIdActionsDetachActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumesIdActionsDetachActionResponseActionResources })
  resources: PostVolumesIdActionsDetachActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostVolumesIdActionsDetachActionResponseActionStatusEnum;
}


export class PostVolumesIdActionsDetachActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostVolumesIdActionsDetachActionResponseAction;
}


export class PostVolumesIdActionsDetachRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVolumesIdActionsDetachPathParams;
}


export class PostVolumesIdActionsDetachResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostVolumesIdActionsDetachActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
