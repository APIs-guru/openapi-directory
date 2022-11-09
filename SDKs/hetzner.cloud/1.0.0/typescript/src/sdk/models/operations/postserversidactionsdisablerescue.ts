import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsDisableRescuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsDisableRescueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsDisableRescuePathParams;
}


// PostServersIdActionsDisableRescueActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsDisableRescueActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsDisableRescueActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsDisableRescueActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsDisableRescueActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsDisableRescueActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsDisableRescueActionResponseActionResources })
  resources: PostServersIdActionsDisableRescueActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsDisableRescueActionResponseActionStatusEnum;
}


export class PostServersIdActionsDisableRescueActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsDisableRescueActionResponseAction;
}


export class PostServersIdActionsDisableRescueResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsDisableRescueActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
