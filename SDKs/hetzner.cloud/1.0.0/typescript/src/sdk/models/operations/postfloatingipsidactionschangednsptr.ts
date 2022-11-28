import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFloatingIpsIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources })
  resources: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction;
}


export class PostFloatingIpsIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFloatingIpsIdActionsChangeDnsPtrPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest;
}


export class PostFloatingIpsIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostFloatingIpsIdActionsChangeDnsPtrActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
