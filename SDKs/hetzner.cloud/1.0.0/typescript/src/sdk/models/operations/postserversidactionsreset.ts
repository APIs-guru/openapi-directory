import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsResetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsResetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsResetPathParams;
}


// PostServersIdActionsResetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsResetActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsResetActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsResetActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsResetActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsResetActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsResetActionResponseActionResources })
  resources: PostServersIdActionsResetActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsResetActionResponseActionStatusEnum;
}


export class PostServersIdActionsResetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsResetActionResponseAction;
}


export class PostServersIdActionsResetResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsResetActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
