import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsResetPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsResetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsResetPasswordPathParams;
}


// PostServersIdActionsResetPassword201ApplicationJsonActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsResetPassword201ApplicationJsonActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsResetPassword201ApplicationJsonActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsResetPassword201ApplicationJsonAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsResetPassword201ApplicationJsonActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsResetPassword201ApplicationJsonActionResources })
  resources: PostServersIdActionsResetPassword201ApplicationJsonActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum;
}


export class PostServersIdActionsResetPassword201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: PostServersIdActionsResetPassword201ApplicationJsonAction;

  @Metadata({ data: "json, name=root_password" })
  rootPassword?: string;
}


export class PostServersIdActionsResetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postServersIdActionsResetPassword201ApplicationJsonObject?: PostServersIdActionsResetPassword201ApplicationJson;

  @Metadata()
  statusCode: number;
}
