import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsEnableRescuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostServersIdActionsEnableRescueRequestBodyTypeEnum {
    Linux64 = "linux64"
,    Linux32 = "linux32"
,    Freebsd64 = "freebsd64"
}


export class PostServersIdActionsEnableRescueRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssh_keys" })
  sshKeys?: number[];

  @Metadata({ data: "json, name=type" })
  type?: PostServersIdActionsEnableRescueRequestBodyTypeEnum;
}


export class PostServersIdActionsEnableRescueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsEnableRescuePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsEnableRescueRequestBody;
}


// PostServersIdActionsEnableRescue201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsEnableRescue201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsEnableRescue201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsEnableRescue201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsEnableRescue201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsEnableRescue201ApplicationJsonActionResources })
  resources: PostServersIdActionsEnableRescue201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum;
}


export class PostServersIdActionsEnableRescue201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: PostServersIdActionsEnableRescue201ApplicationJsonAction;

  @Metadata({ data: "json, name=root_password" })
  rootPassword?: string;
}


export class PostServersIdActionsEnableRescueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postServersIdActionsEnableRescue201ApplicationJsonObject?: PostServersIdActionsEnableRescue201ApplicationJson;

  @Metadata()
  statusCode: number;
}
