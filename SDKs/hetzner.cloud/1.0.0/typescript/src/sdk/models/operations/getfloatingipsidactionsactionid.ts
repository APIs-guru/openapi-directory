import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFloatingIpsIdActionsActionIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFloatingIpsIdActionsActionIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFloatingIpsIdActionsActionIdPathParams;
}


// GetFloatingIpsIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFloatingIpsIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetFloatingIpsIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetFloatingIpsIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetFloatingIpsIdActionsActionIdActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetFloatingIpsIdActionsActionIdActionResponseActionResources })
  resources: GetFloatingIpsIdActionsActionIdActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetFloatingIpsIdActionsActionIdActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetFloatingIpsIdActionsActionIdActionResponseAction;
}


export class GetFloatingIpsIdActionsActionIdResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: GetFloatingIpsIdActionsActionIdActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
