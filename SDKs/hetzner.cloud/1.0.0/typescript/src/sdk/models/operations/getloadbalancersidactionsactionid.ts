import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancersIdActionsActionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetLoadBalancersIdActionsActionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLoadBalancersIdActionsActionIdPathParams;
}


// GetLoadBalancersIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetLoadBalancersIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetLoadBalancersIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetLoadBalancersIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetLoadBalancersIdActionsActionIdActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetLoadBalancersIdActionsActionIdActionResponseActionResources })
  resources: GetLoadBalancersIdActionsActionIdActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetLoadBalancersIdActionsActionIdActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetLoadBalancersIdActionsActionIdActionResponseAction;
}


export class GetLoadBalancersIdActionsActionIdResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: GetLoadBalancersIdActionsActionIdActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
