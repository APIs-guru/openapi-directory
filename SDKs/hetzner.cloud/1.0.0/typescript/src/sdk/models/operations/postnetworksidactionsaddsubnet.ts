import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNetworksIdActionsAddSubnetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}


export class PostNetworksIdActionsAddSubnetAddSubnetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_range" })
  ipRange?: string;

  @SpeakeasyMetadata({ data: "json, name=network_zone" })
  networkZone: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vswitch_id" })
  vswitchId?: number;
}


// PostNetworksIdActionsAddSubnetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsAddSubnetActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsAddSubnetActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostNetworksIdActionsAddSubnetActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostNetworksIdActionsAddSubnetActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsAddSubnetActionResponseActionResources })
  resources: PostNetworksIdActionsAddSubnetActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsAddSubnetActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostNetworksIdActionsAddSubnetActionResponseAction;
}


export class PostNetworksIdActionsAddSubnetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostNetworksIdActionsAddSubnetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsAddSubnetAddSubnetRequest;
}


export class PostNetworksIdActionsAddSubnetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostNetworksIdActionsAddSubnetActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
