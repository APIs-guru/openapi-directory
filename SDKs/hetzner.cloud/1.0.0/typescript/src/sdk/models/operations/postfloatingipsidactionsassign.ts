import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFloatingIpsIdActionsAssignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostFloatingIpsIdActionsAssignAssignFloatingIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server: number;
}


// PostFloatingIpsIdActionsAssignActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsAssignActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsAssignActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFloatingIpsIdActionsAssignActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsAssignActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsAssignActionResponseActionResources })
  resources: PostFloatingIpsIdActionsAssignActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsAssignActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsAssignActionResponseAction;
}


export class PostFloatingIpsIdActionsAssignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFloatingIpsIdActionsAssignPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsIdActionsAssignAssignFloatingIpRequest;
}


export class PostFloatingIpsIdActionsAssignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostFloatingIpsIdActionsAssignActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
