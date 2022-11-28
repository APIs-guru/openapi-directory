import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFloatingIpsIdActionsActionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetFloatingIpsIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFloatingIpsIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetFloatingIpsIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetFloatingIpsIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetFloatingIpsIdActionsActionIdActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetFloatingIpsIdActionsActionIdActionResponseActionResources })
  resources: GetFloatingIpsIdActionsActionIdActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetFloatingIpsIdActionsActionIdActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetFloatingIpsIdActionsActionIdActionResponseAction;
}


export class GetFloatingIpsIdActionsActionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFloatingIpsIdActionsActionIdPathParams;
}


export class GetFloatingIpsIdActionsActionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: GetFloatingIpsIdActionsActionIdActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
