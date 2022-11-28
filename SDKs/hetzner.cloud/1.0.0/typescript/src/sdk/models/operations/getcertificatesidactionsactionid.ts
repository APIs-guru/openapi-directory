import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCertificatesIdActionsActionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetCertificatesIdActionsActionIdActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetCertificatesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetCertificatesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetCertificatesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetCertificatesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetCertificatesIdActionsActionIdActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetCertificatesIdActionsActionIdActionResponseActionResources })
  resources: GetCertificatesIdActionsActionIdActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCertificatesIdActionsActionIdActionResponseActionStatusEnum;
}


export class GetCertificatesIdActionsActionIdActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetCertificatesIdActionsActionIdActionResponseAction;
}


export class GetCertificatesIdActionsActionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCertificatesIdActionsActionIdPathParams;
}


export class GetCertificatesIdActionsActionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: GetCertificatesIdActionsActionIdActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
