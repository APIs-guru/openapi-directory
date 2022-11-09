import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsRequestConsolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsRequestConsoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsRequestConsolePathParams;
}


// PostServersIdActionsRequestConsole201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsRequestConsole201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsRequestConsole201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsRequestConsole201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsRequestConsole201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsRequestConsole201ApplicationJsonActionResources })
  resources: PostServersIdActionsRequestConsole201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum;
}


export class PostServersIdActionsRequestConsole201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsRequestConsole201ApplicationJsonAction;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=wss_url" })
  wssUrl: string;
}


export class PostServersIdActionsRequestConsoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postServersIdActionsRequestConsole201ApplicationJsonObject?: PostServersIdActionsRequestConsole201ApplicationJson;

  @Metadata()
  statusCode: number;
}
