import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsChangeDnsPtrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostServersIdActionsChangeDnsPtrActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsChangeDnsPtrActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsChangeDnsPtrActionResponseActionResources })
  resources: PostServersIdActionsChangeDnsPtrActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}


export class PostServersIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostServersIdActionsChangeDnsPtrActionResponseAction;
}


export class PostServersIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsChangeDnsPtrPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsChangeDnsPtrRequestBody;
}


export class PostServersIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostServersIdActionsChangeDnsPtrActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
