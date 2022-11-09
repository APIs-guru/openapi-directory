import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsAttachToNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsAttachToNetworkAttachToNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias_ips" })
  aliasIps?: string[];

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=network" })
  network: number;
}


export class PostServersIdActionsAttachToNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsAttachToNetworkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsAttachToNetworkAttachToNetworkRequest;
}


// PostServersIdActionsAttachToNetworkActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsAttachToNetworkActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsAttachToNetworkActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsAttachToNetworkActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsAttachToNetworkActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsAttachToNetworkActionResponseActionResources })
  resources: PostServersIdActionsAttachToNetworkActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum;
}


export class PostServersIdActionsAttachToNetworkActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsAttachToNetworkActionResponseAction;
}


export class PostServersIdActionsAttachToNetworkResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsAttachToNetworkActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
