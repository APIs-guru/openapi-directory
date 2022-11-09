import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsChangeDnsPtrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class PostServersIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsChangeDnsPtrPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsChangeDnsPtrRequestBody;
}


// PostServersIdActionsChangeDnsPtrActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsChangeDnsPtrActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsChangeDnsPtrActionResponseActionResources })
  resources: PostServersIdActionsChangeDnsPtrActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}


export class PostServersIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsChangeDnsPtrActionResponseAction;
}


export class PostServersIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsChangeDnsPtrActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
