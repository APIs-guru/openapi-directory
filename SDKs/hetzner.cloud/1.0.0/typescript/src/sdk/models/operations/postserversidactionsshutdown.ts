import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsShutdownPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsShutdownRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsShutdownPathParams;
}


// PostServersIdActionsShutdownActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsShutdownActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsShutdownActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsShutdownActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsShutdownActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsShutdownActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsShutdownActionResponseActionResources })
  resources: PostServersIdActionsShutdownActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsShutdownActionResponseActionStatusEnum;
}


export class PostServersIdActionsShutdownActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsShutdownActionResponseAction;
}


export class PostServersIdActionsShutdownResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsShutdownActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
