import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagesIdActionsActionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetImagesIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetImagesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetImagesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetImagesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetImagesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetImagesIdActionsActionIdActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetImagesIdActionsActionIdActionResponseActionResources })
  resources: GetImagesIdActionsActionIdActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetImagesIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetImagesIdActionsActionIdActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetImagesIdActionsActionIdActionResponseAction;
}


export class GetImagesIdActionsActionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagesIdActionsActionIdPathParams;
}


export class GetImagesIdActionsActionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: GetImagesIdActionsActionIdActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
