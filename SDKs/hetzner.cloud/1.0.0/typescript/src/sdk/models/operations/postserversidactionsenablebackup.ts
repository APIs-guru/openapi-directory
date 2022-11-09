import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsEnableBackupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsEnableBackupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsEnableBackupPathParams;
}


// PostServersIdActionsEnableBackupActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsEnableBackupActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsEnableBackupActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsEnableBackupActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsEnableBackupActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsEnableBackupActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsEnableBackupActionResponseActionResources })
  resources: PostServersIdActionsEnableBackupActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsEnableBackupActionResponseActionStatusEnum;
}


export class PostServersIdActionsEnableBackupActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsEnableBackupActionResponseAction;
}


export class PostServersIdActionsEnableBackupResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsEnableBackupActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
