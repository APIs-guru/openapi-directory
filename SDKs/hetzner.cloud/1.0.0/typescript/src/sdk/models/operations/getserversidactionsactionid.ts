import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServersIdActionsActionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetServersIdActionsActionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServersIdActionsActionIdPathParams;
}


// GetServersIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetServersIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetServersIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetServersIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetServersIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetServersIdActionsActionIdActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetServersIdActionsActionIdActionResponseActionResources })
  resources: GetServersIdActionsActionIdActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetServersIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetServersIdActionsActionIdActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetServersIdActionsActionIdActionResponseAction;
}


export class GetServersIdActionsActionIdResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: GetServersIdActionsActionIdActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
