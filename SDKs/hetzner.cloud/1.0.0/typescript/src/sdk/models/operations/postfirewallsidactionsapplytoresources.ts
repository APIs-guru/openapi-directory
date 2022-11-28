import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFirewallsIdActionsApplyToResourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector
/** 
 * Configuration for type label_selector, required if type is `label_selector`
**/
export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer
/** 
 * Configuration for type server, required if type is `server`
**/
export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}


export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum;
}


export class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apply_to", elemType: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources })
  applyTo: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources[];
}


// PostFirewallsIdActionsApplyToResourcesActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsIdActionsApplyToResourcesActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFirewallsIdActionsApplyToResourcesActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources })
  resources: PostFirewallsIdActionsApplyToResourcesActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFirewallsIdActionsApplyToResourcesActionsResponseActionStatusEnum;
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination extends SpeakeasyBase {
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


export class PostFirewallsIdActionsApplyToResourcesActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: PostFirewallsIdActionsApplyToResourcesActionsResponseMetaPagination;
}


export class PostFirewallsIdActionsApplyToResourcesActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: PostFirewallsIdActionsApplyToResourcesActionsResponseAction })
  actions: PostFirewallsIdActionsApplyToResourcesActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PostFirewallsIdActionsApplyToResourcesActionsResponseMeta;
}


export class PostFirewallsIdActionsApplyToResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFirewallsIdActionsApplyToResourcesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest;
}


export class PostFirewallsIdActionsApplyToResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: PostFirewallsIdActionsApplyToResourcesActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
