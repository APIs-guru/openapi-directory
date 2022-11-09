import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFirewallsIdActionsRemoveFromResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector
/** 
 * Configuration for type label_selector, required if type is `label_selector`
**/
export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer
/** 
 * Configuration for type server, required if type is `server`
**/
export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
}


export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer;

  @Metadata({ data: "json, name=type" })
  type?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesTypeEnum;
}


export class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=remove_from", elemType: operations.PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources })
  removeFrom: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResources[];
}


export class PostFirewallsIdActionsRemoveFromResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFirewallsIdActionsRemoveFromResourcesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequest;
}


// PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources })
  resources: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFirewallsIdActionsRemoveFromResourcesActionsResponseActionStatusEnum;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_page" })
  lastPage: number;

  @Metadata({ data: "json, name=next_page" })
  nextPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=previous_page" })
  previousPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMetaPagination;
}


export class PostFirewallsIdActionsRemoveFromResourcesActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction })
  actions: PostFirewallsIdActionsRemoveFromResourcesActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: PostFirewallsIdActionsRemoveFromResourcesActionsResponseMeta;
}


export class PostFirewallsIdActionsRemoveFromResourcesResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: PostFirewallsIdActionsRemoveFromResourcesActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
