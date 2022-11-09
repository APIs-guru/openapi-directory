import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFloatingIpsIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class PostFloatingIpsIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFloatingIpsIdActionsChangeDnsPtrPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest;
}


// PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources })
  resources: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction;
}


export class PostFloatingIpsIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostFloatingIpsIdActionsChangeDnsPtrActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
