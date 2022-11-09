import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFloatingIpsIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete?: boolean;
}


export class PostFloatingIpsIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFloatingIpsIdActionsChangeProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest;
}


// PostFloatingIpsIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFloatingIpsIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsChangeProtectionActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources })
  resources: PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsChangeProtectionActionResponseAction;
}


export class PostFloatingIpsIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostFloatingIpsIdActionsChangeProtectionActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
