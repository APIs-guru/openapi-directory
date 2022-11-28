import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsPoweronPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostServersIdActionsPoweronActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsPoweronActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsPoweronActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsPoweronActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsPoweronActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsPoweronActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsPoweronActionResponseActionResources })
  resources: PostServersIdActionsPoweronActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsPoweronActionResponseActionStatusEnum;
}


export class PostServersIdActionsPoweronActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostServersIdActionsPoweronActionResponseAction;
}


export class PostServersIdActionsPoweronRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsPoweronPathParams;
}


export class PostServersIdActionsPoweronResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostServersIdActionsPoweronActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
