import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsChangeTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsChangeTypeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server_type" })
  serverType: string;

  @SpeakeasyMetadata({ data: "json, name=upgrade_disk" })
  upgradeDisk: boolean;
}


// PostServersIdActionsChangeTypeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsChangeTypeActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsChangeTypeActionResponseActionResources })
  resources: PostServersIdActionsChangeTypeActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsChangeTypeActionResponseActionStatusEnum;
}


export class PostServersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostServersIdActionsChangeTypeActionResponseAction;
}


export class PostServersIdActionsChangeTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsChangeTypePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsChangeTypeRequestBody;
}


export class PostServersIdActionsChangeTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostServersIdActionsChangeTypeActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
