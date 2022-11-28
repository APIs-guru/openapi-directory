import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCertificatesIdActionsRetryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostCertificatesIdActionsRetryActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostCertificatesIdActionsRetryActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostCertificatesIdActionsRetryActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostCertificatesIdActionsRetryActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostCertificatesIdActionsRetryActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostCertificatesIdActionsRetryActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostCertificatesIdActionsRetryActionResponseActionResources })
  resources: PostCertificatesIdActionsRetryActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostCertificatesIdActionsRetryActionResponseActionStatusEnum;
}


export class PostCertificatesIdActionsRetryActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostCertificatesIdActionsRetryActionResponseAction;
}


export class PostCertificatesIdActionsRetryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCertificatesIdActionsRetryPathParams;
}


export class PostCertificatesIdActionsRetryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostCertificatesIdActionsRetryActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
