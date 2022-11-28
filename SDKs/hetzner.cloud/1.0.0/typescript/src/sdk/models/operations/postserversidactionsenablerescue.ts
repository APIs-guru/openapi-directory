import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsEnableRescuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostServersIdActionsEnableRescueRequestBodyTypeEnum {
    Linux64 = "linux64",
    Linux32 = "linux32",
    Freebsd64 = "freebsd64"
}


export class PostServersIdActionsEnableRescueRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssh_keys" })
  sshKeys?: number[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostServersIdActionsEnableRescueRequestBodyTypeEnum;
}


// PostServersIdActionsEnableRescue201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsEnableRescue201ApplicationJsonActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsEnableRescue201ApplicationJsonActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsEnableRescue201ApplicationJsonAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsEnableRescue201ApplicationJsonActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsEnableRescue201ApplicationJsonActionResources })
  resources: PostServersIdActionsEnableRescue201ApplicationJsonActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsEnableRescue201ApplicationJsonActionStatusEnum;
}


export class PostServersIdActionsEnableRescue201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PostServersIdActionsEnableRescue201ApplicationJsonAction;

  @SpeakeasyMetadata({ data: "json, name=root_password" })
  rootPassword?: string;
}


export class PostServersIdActionsEnableRescueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsEnableRescuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsEnableRescueRequestBody;
}


export class PostServersIdActionsEnableRescueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postServersIdActionsEnableRescue201ApplicationJsonObject?: PostServersIdActionsEnableRescue201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
