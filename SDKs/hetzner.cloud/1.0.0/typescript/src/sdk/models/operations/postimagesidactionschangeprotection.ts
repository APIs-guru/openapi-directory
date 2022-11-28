import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostImagesIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostImagesIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;
}


// PostImagesIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostImagesIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostImagesIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostImagesIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostImagesIdActionsChangeProtectionActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostImagesIdActionsChangeProtectionActionResponseActionResources })
  resources: PostImagesIdActionsChangeProtectionActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostImagesIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostImagesIdActionsChangeProtectionActionResponseAction;
}


export class PostImagesIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostImagesIdActionsChangeProtectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostImagesIdActionsChangeProtectionRequestBody;
}


export class PostImagesIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostImagesIdActionsChangeProtectionActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
