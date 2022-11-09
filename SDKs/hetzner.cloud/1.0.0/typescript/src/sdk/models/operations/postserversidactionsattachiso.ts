import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsAttachIsoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsAttachIsoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=iso" })
  iso: string;
}


export class PostServersIdActionsAttachIsoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsAttachIsoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsAttachIsoRequestBody;
}


// PostServersIdActionsAttachIsoActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsAttachIsoActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsAttachIsoActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsAttachIsoActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsAttachIsoActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsAttachIsoActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsAttachIsoActionResponseActionResources })
  resources: PostServersIdActionsAttachIsoActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsAttachIsoActionResponseActionStatusEnum;
}


export class PostServersIdActionsAttachIsoActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsAttachIsoActionResponseAction;
}


export class PostServersIdActionsAttachIsoResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsAttachIsoActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
