import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetActionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetActionsIdPathParams;
}


// GetActionsIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetActionsIdActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetActionsIdActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetActionsIdActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetActionsIdActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetActionsIdActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetActionsIdActionResponseActionResources })
  resources: GetActionsIdActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetActionsIdActionResponseActionStatusEnum;
}


export class GetActionsIdActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetActionsIdActionResponseAction;
}


export class GetActionsIdResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: GetActionsIdActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
