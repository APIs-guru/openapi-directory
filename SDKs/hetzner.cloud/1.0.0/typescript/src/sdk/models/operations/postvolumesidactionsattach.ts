import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostVolumesIdActionsAttachPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostVolumesIdActionsAttachAttachVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automount" })
  automount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;
}


// PostVolumesIdActionsAttachActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostVolumesIdActionsAttachActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostVolumesIdActionsAttachActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostVolumesIdActionsAttachActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostVolumesIdActionsAttachActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostVolumesIdActionsAttachActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumesIdActionsAttachActionResponseActionResources })
  resources: PostVolumesIdActionsAttachActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostVolumesIdActionsAttachActionResponseActionStatusEnum;
}


export class PostVolumesIdActionsAttachActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostVolumesIdActionsAttachActionResponseAction;
}


export class PostVolumesIdActionsAttachRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVolumesIdActionsAttachPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostVolumesIdActionsAttachAttachVolumeRequest;
}


export class PostVolumesIdActionsAttachResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostVolumesIdActionsAttachActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
