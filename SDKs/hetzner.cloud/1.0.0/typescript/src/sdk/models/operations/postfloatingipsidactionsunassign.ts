import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFloatingIpsIdActionsUnassignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostFloatingIpsIdActionsUnassignActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsUnassignActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsUnassignActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFloatingIpsIdActionsUnassignActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsUnassignActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsUnassignActionResponseActionResources })
  resources: PostFloatingIpsIdActionsUnassignActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsUnassignActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsUnassignActionResponseAction;
}


export class PostFloatingIpsIdActionsUnassignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFloatingIpsIdActionsUnassignPathParams;
}


export class PostFloatingIpsIdActionsUnassignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostFloatingIpsIdActionsUnassignActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
