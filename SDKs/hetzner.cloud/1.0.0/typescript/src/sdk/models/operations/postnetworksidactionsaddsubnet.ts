import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNetworksIdActionsAddSubnetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum {
    Cloud = "cloud"
,    Server = "server"
,    Vswitch = "vswitch"
}


export class PostNetworksIdActionsAddSubnetAddSubnetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @Metadata({ data: "json, name=network_zone" })
  networkZone: string;

  @Metadata({ data: "json, name=type" })
  type: PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum;

  @Metadata({ data: "json, name=vswitch_id" })
  vswitchId?: number;
}


export class PostNetworksIdActionsAddSubnetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNetworksIdActionsAddSubnetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsAddSubnetAddSubnetRequest;
}


// PostNetworksIdActionsAddSubnetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsAddSubnetActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsAddSubnetActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostNetworksIdActionsAddSubnetActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostNetworksIdActionsAddSubnetActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostNetworksIdActionsAddSubnetActionResponseActionResources })
  resources: PostNetworksIdActionsAddSubnetActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsAddSubnetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostNetworksIdActionsAddSubnetActionResponseAction;
}


export class PostNetworksIdActionsAddSubnetResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostNetworksIdActionsAddSubnetActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
