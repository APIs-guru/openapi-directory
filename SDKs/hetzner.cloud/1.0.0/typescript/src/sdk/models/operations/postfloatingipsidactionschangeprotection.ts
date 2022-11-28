import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFloatingIpsIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;
}


// PostFloatingIpsIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFloatingIpsIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFloatingIpsIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFloatingIpsIdActionsChangeProtectionActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources })
  resources: PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostFloatingIpsIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostFloatingIpsIdActionsChangeProtectionActionResponseAction;
}


export class PostFloatingIpsIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFloatingIpsIdActionsChangeProtectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest;
}


export class PostFloatingIpsIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostFloatingIpsIdActionsChangeProtectionActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
