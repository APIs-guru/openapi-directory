import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsDetachFromNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network: number;
}


export class PostServersIdActionsDetachFromNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsDetachFromNetworkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest;
}


// PostServersIdActionsDetachFromNetworkActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsDetachFromNetworkActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsDetachFromNetworkActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsDetachFromNetworkActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsDetachFromNetworkActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsDetachFromNetworkActionResponseActionResources })
  resources: PostServersIdActionsDetachFromNetworkActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
}


export class PostServersIdActionsDetachFromNetworkActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsDetachFromNetworkActionResponseAction;
}


export class PostServersIdActionsDetachFromNetworkResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsDetachFromNetworkActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
