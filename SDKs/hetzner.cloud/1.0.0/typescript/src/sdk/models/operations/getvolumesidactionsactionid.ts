import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVolumesIdActionsActionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetVolumesIdActionsActionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVolumesIdActionsActionIdPathParams;
}


// GetVolumesIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetVolumesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetVolumesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetVolumesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetVolumesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetVolumesIdActionsActionIdActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetVolumesIdActionsActionIdActionResponseActionResources })
  resources: GetVolumesIdActionsActionIdActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetVolumesIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetVolumesIdActionsActionIdActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetVolumesIdActionsActionIdActionResponseAction;
}


export class GetVolumesIdActionsActionIdResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: GetVolumesIdActionsActionIdActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
