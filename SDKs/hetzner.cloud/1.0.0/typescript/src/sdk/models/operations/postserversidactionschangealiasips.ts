import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsChangeAliasIpsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsChangeAliasIpsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias_ips" })
  aliasIps: string[];

  @Metadata({ data: "json, name=network" })
  network: number;
}


export class PostServersIdActionsChangeAliasIpsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsChangeAliasIpsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsChangeAliasIpsRequestBody;
}


// PostServersIdActionsChangeAliasIpsActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsChangeAliasIpsActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsChangeAliasIpsActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsChangeAliasIpsActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsChangeAliasIpsActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsChangeAliasIpsActionResponseActionResources })
  resources: PostServersIdActionsChangeAliasIpsActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum;
}


export class PostServersIdActionsChangeAliasIpsActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsChangeAliasIpsActionResponseAction;
}


export class PostServersIdActionsChangeAliasIpsResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsChangeAliasIpsActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
