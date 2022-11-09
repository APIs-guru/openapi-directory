import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostVolumesIdActionsDetachPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostVolumesIdActionsDetachRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVolumesIdActionsDetachPathParams;
}


// PostVolumesIdActionsDetachActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumesIdActionsDetachActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumesIdActionsDetachActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumesIdActionsDetachActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostVolumesIdActionsDetachActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostVolumesIdActionsDetachActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostVolumesIdActionsDetachActionResponseActionResources })
  resources: PostVolumesIdActionsDetachActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostVolumesIdActionsDetachActionResponseActionStatusEnum;
}


export class PostVolumesIdActionsDetachActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostVolumesIdActionsDetachActionResponseAction;
}


export class PostVolumesIdActionsDetachResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostVolumesIdActionsDetachActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
