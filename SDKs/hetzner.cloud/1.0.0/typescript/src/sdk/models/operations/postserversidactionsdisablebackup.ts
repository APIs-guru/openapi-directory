import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsDisableBackupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsDisableBackupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsDisableBackupPathParams;
}


// PostServersIdActionsDisableBackupActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsDisableBackupActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsDisableBackupActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsDisableBackupActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsDisableBackupActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsDisableBackupActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsDisableBackupActionResponseActionResources })
  resources: PostServersIdActionsDisableBackupActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsDisableBackupActionResponseActionStatusEnum;
}


export class PostServersIdActionsDisableBackupActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsDisableBackupActionResponseAction;
}


export class PostServersIdActionsDisableBackupResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsDisableBackupActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
