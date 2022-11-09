import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFloatingIpsIdActionsAssignPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostFloatingIpsIdActionsAssignAssignFloatingIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server: number;
}


export class PostFloatingIpsIdActionsAssignRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFloatingIpsIdActionsAssignPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsIdActionsAssignAssignFloatingIpRequest;
}


// PostFloatingIpsIdActionsAssignActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsAssignActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsAssignActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFloatingIpsIdActionsAssignActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsAssignActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFloatingIpsIdActionsAssignActionResponseActionResources })
  resources: PostFloatingIpsIdActionsAssignActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsAssignActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsAssignActionResponseAction;
}


export class PostFloatingIpsIdActionsAssignResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostFloatingIpsIdActionsAssignActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
