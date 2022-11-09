import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsPoweroffPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsPoweroffRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsPoweroffPathParams;
}


// PostServersIdActionsPoweroffActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsPoweroffActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsPoweroffActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsPoweroffActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsPoweroffActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsPoweroffActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsPoweroffActionResponseActionResources })
  resources: PostServersIdActionsPoweroffActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsPoweroffActionResponseActionStatusEnum;
}


export class PostServersIdActionsPoweroffActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsPoweroffActionResponseAction;
}


export class PostServersIdActionsPoweroffResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsPoweroffActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
