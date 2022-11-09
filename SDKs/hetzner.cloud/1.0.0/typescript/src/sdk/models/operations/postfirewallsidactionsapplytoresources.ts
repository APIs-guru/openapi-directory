import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFirewallsIdActionsApplyToResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector
/** 
 * Configuration for type label_selector, required if type is `label_selector`
**/
export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer
/** 
 * Configuration for type server, required if type is `server`
**/
export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
}


export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer;

  @Metadata({ data: "json, name=type" })
  type?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum;
}


export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=apply_to", elemType: operations.PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources })
  applyTo: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources[];
}


export class PostFirewallsIdActionsApplyToResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFirewallsIdActionsApplyToResourcesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest;
}


// PostFirewallsIdActionsApplyToResourcesActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsIdActionsApplyToResourcesActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFirewallsIdActionsApplyToResourcesActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources })
  resources: PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum;
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination extends SpeakeasyBase {
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


export class PostFirewallsIdActionsApplyToResourcesActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination;
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.PostFirewallsIdActionsApplyToResourcesActionsResponseAction })
  actions: PostFirewallsIdActionsApplyToResourcesActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: PostFirewallsIdActionsApplyToResourcesActionsResponseMeta;
}


export class PostFirewallsIdActionsApplyToResourcesResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: PostFirewallsIdActionsApplyToResourcesActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
