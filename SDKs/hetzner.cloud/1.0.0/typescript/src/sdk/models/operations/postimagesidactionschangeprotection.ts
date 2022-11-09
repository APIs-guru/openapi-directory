import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostImagesIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostImagesIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete?: boolean;
}


export class PostImagesIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostImagesIdActionsChangeProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostImagesIdActionsChangeProtectionRequestBody;
}


// PostImagesIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostImagesIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostImagesIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostImagesIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostImagesIdActionsChangeProtectionActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostImagesIdActionsChangeProtectionActionResponseActionResources })
  resources: PostImagesIdActionsChangeProtectionActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostImagesIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostImagesIdActionsChangeProtectionActionResponseAction;
}


export class PostImagesIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostImagesIdActionsChangeProtectionActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
