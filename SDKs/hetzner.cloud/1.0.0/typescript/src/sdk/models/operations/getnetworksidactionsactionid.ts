import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworksIdActionsActionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetNetworksIdActionsActionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworksIdActionsActionIdPathParams;
}


// GetNetworksIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetNetworksIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetNetworksIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetNetworksIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetNetworksIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetNetworksIdActionsActionIdActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetNetworksIdActionsActionIdActionResponseActionResources })
  resources: GetNetworksIdActionsActionIdActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetNetworksIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetNetworksIdActionsActionIdActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetNetworksIdActionsActionIdActionResponseAction;
}


export class GetNetworksIdActionsActionIdResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: GetNetworksIdActionsActionIdActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
