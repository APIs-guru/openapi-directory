import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsDetachIsoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsDetachIsoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsDetachIsoPathParams;
}


// PostServersIdActionsDetachIsoActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsDetachIsoActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsDetachIsoActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsDetachIsoActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsDetachIsoActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsDetachIsoActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsDetachIsoActionResponseActionResources })
  resources: PostServersIdActionsDetachIsoActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsDetachIsoActionResponseActionStatusEnum;
}


export class PostServersIdActionsDetachIsoActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsDetachIsoActionResponseAction;
}


export class PostServersIdActionsDetachIsoResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsDetachIsoActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
