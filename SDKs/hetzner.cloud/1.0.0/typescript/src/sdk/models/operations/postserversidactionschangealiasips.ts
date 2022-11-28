import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsChangeAliasIpsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsChangeAliasIpsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias_ips" })
  aliasIps: string[];

  @SpeakeasyMetadata({ data: "json, name=network" })
  network: number;
}


// PostServersIdActionsChangeAliasIpsActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsChangeAliasIpsActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsChangeAliasIpsActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsChangeAliasIpsActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsChangeAliasIpsActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsChangeAliasIpsActionResponseActionResources })
  resources: PostServersIdActionsChangeAliasIpsActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum;
}


export class PostServersIdActionsChangeAliasIpsActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostServersIdActionsChangeAliasIpsActionResponseAction;
}


export class PostServersIdActionsChangeAliasIpsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsChangeAliasIpsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsChangeAliasIpsRequestBody;
}


export class PostServersIdActionsChangeAliasIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostServersIdActionsChangeAliasIpsActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
