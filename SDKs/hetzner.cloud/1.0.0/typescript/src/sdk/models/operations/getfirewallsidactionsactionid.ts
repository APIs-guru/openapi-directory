import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallsIdActionsActionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetFirewallsIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFirewallsIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetFirewallsIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetFirewallsIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetFirewallsIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetFirewallsIdActionsActionIdActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetFirewallsIdActionsActionIdActionResponseActionResources })
  resources: GetFirewallsIdActionsActionIdActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetFirewallsIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetFirewallsIdActionsActionIdActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetFirewallsIdActionsActionIdActionResponseAction;
}


export class GetFirewallsIdActionsActionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFirewallsIdActionsActionIdPathParams;
}


export class GetFirewallsIdActionsActionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: GetFirewallsIdActionsActionIdActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
