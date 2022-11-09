import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsPoweronPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsPoweronRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsPoweronPathParams;
}


// PostServersIdActionsPoweronActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsPoweronActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsPoweronActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsPoweronActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsPoweronActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsPoweronActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsPoweronActionResponseActionResources })
  resources: PostServersIdActionsPoweronActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsPoweronActionResponseActionStatusEnum;
}


export class PostServersIdActionsPoweronActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsPoweronActionResponseAction;
}


export class PostServersIdActionsPoweronResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsPoweronActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
