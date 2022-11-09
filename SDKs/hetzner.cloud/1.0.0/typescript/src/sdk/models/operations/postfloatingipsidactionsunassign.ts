import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFloatingIpsIdActionsUnassignPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostFloatingIpsIdActionsUnassignRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFloatingIpsIdActionsUnassignPathParams;
}


// PostFloatingIpsIdActionsUnassignActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsUnassignActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsUnassignActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFloatingIpsIdActionsUnassignActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsUnassignActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFloatingIpsIdActionsUnassignActionResponseActionResources })
  resources: PostFloatingIpsIdActionsUnassignActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsUnassignActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsUnassignActionResponseAction;
}


export class PostFloatingIpsIdActionsUnassignResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostFloatingIpsIdActionsUnassignActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
