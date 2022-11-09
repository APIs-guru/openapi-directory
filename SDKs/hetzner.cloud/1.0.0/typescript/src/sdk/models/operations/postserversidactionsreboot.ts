import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsRebootPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsRebootRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsRebootPathParams;
}


// PostServersIdActionsRebootActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsRebootActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsRebootActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsRebootActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsRebootActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsRebootActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsRebootActionResponseActionResources })
  resources: PostServersIdActionsRebootActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsRebootActionResponseActionStatusEnum;
}


export class PostServersIdActionsRebootActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsRebootActionResponseAction;
}


export class PostServersIdActionsRebootResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsRebootActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
