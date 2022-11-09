import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsChangeTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsChangeTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=server_type" })
  serverType: string;

  @Metadata({ data: "json, name=upgrade_disk" })
  upgradeDisk: boolean;
}


export class PostServersIdActionsChangeTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsChangeTypePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsChangeTypeRequestBody;
}


// PostServersIdActionsChangeTypeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsChangeTypeActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsChangeTypeActionResponseActionResources })
  resources: PostServersIdActionsChangeTypeActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsChangeTypeActionResponseActionStatusEnum;
}


export class PostServersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsChangeTypeActionResponseAction;
}


export class PostServersIdActionsChangeTypeResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsChangeTypeActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
