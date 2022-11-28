import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVolumesIdActionsActionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetVolumesIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetVolumesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetVolumesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetVolumesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetVolumesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetVolumesIdActionsActionIdActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetVolumesIdActionsActionIdActionResponseActionResources })
  resources: GetVolumesIdActionsActionIdActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetVolumesIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetVolumesIdActionsActionIdActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetVolumesIdActionsActionIdActionResponseAction;
}


export class GetVolumesIdActionsActionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVolumesIdActionsActionIdPathParams;
}


export class GetVolumesIdActionsActionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: GetVolumesIdActionsActionIdActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
