import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFirewallsIdActionsRemoveFromResourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector
/** 
 * Configuration for type label_selector, required if type is `label_selector`
**/
export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer
/** 
 * Configuration for type server, required if type is `server`
**/
export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}


export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum;
}


export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remove_from", elemType: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources })
  removeFrom: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources[];
}


// PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources })
  resources: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage: number;

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page" })
  previousPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction })
  actions: PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta;
}


export class PostFirewallsIdActionsRemoveFromResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFirewallsIdActionsRemoveFromResourcesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest;
}


export class PostFirewallsIdActionsRemoveFromResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: PostFirewallsIdActionsRemoveFromResourcesActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
