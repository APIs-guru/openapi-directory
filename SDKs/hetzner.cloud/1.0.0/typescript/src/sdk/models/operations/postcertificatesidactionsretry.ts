import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCertificatesIdActionsRetryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCertificatesIdActionsRetryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCertificatesIdActionsRetryPathParams;
}


// PostCertificatesIdActionsRetryActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostCertificatesIdActionsRetryActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostCertificatesIdActionsRetryActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostCertificatesIdActionsRetryActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostCertificatesIdActionsRetryActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostCertificatesIdActionsRetryActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostCertificatesIdActionsRetryActionResponseActionResources })
  resources: PostCertificatesIdActionsRetryActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostCertificatesIdActionsRetryActionResponseActionStatusEnum;
}


export class PostCertificatesIdActionsRetryActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostCertificatesIdActionsRetryActionResponseAction;
}


export class PostCertificatesIdActionsRetryResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostCertificatesIdActionsRetryActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
