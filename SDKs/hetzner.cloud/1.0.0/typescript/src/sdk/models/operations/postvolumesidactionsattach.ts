import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostVolumesIdActionsAttachPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostVolumesIdActionsAttachAttachVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=automount" })
  automount?: boolean;

  @Metadata({ data: "json, name=server" })
  server: number;
}


export class PostVolumesIdActionsAttachRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVolumesIdActionsAttachPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostVolumesIdActionsAttachAttachVolumeRequest;
}


// PostVolumesIdActionsAttachActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumesIdActionsAttachActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumesIdActionsAttachActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumesIdActionsAttachActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostVolumesIdActionsAttachActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostVolumesIdActionsAttachActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostVolumesIdActionsAttachActionResponseActionResources })
  resources: PostVolumesIdActionsAttachActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostVolumesIdActionsAttachActionResponseActionStatusEnum;
}


export class PostVolumesIdActionsAttachActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostVolumesIdActionsAttachActionResponseAction;
}


export class PostVolumesIdActionsAttachResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostVolumesIdActionsAttachActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
