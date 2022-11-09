import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsChangeProtectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete?: boolean;

  @Metadata({ data: "json, name=rebuild" })
  rebuild?: boolean;
}


export class PostServersIdActionsChangeProtectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsChangeProtectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsChangeProtectionRequestBody;
}


// PostServersIdActionsChangeProtectionActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsChangeProtectionActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsChangeProtectionActionResponseActionResources })
  resources: PostServersIdActionsChangeProtectionActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsChangeProtectionActionResponseActionStatusEnum;
}


export class PostServersIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsChangeProtectionActionResponseAction;
}


export class PostServersIdActionsChangeProtectionResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsChangeProtectionActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
