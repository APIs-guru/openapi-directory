import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFirewallsIdActionsActionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFirewallsIdActionsActionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFirewallsIdActionsActionIdPathParams;
}


// GetFirewallsIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFirewallsIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetFirewallsIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetFirewallsIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetFirewallsIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetFirewallsIdActionsActionIdActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetFirewallsIdActionsActionIdActionResponseActionResources })
  resources: GetFirewallsIdActionsActionIdActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetFirewallsIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetFirewallsIdActionsActionIdActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetFirewallsIdActionsActionIdActionResponseAction;
}


export class GetFirewallsIdActionsActionIdResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: GetFirewallsIdActionsActionIdActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
