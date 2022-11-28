import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostFirewallsIdActionsSetRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum {
    In = "in",
    Out = "out"
}

export enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}


export class PostFirewallsIdActionsSetRulesSetRulesRequestRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PostFirewallsIdActionsSetRulesSetRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: PostFirewallsIdActionsSetRulesSetRulesRequestRule })
  rules: PostFirewallsIdActionsSetRulesSetRulesRequestRule[];
}


// PostFirewallsIdActionsSetRulesActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsIdActionsSetRulesActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsIdActionsSetRulesActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFirewallsIdActionsSetRulesActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFirewallsIdActionsSetRulesActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFirewallsIdActionsSetRulesActionsResponseActionResources })
  resources: PostFirewallsIdActionsSetRulesActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum;
}


export class PostFirewallsIdActionsSetRulesActionsResponseMetaPagination extends SpeakeasyBase {
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


export class PostFirewallsIdActionsSetRulesActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: PostFirewallsIdActionsSetRulesActionsResponseMetaPagination;
}


export class PostFirewallsIdActionsSetRulesActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: PostFirewallsIdActionsSetRulesActionsResponseAction })
  actions: PostFirewallsIdActionsSetRulesActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PostFirewallsIdActionsSetRulesActionsResponseMeta;
}


export class PostFirewallsIdActionsSetRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFirewallsIdActionsSetRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsIdActionsSetRulesSetRulesRequest;
}


export class PostFirewallsIdActionsSetRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: PostFirewallsIdActionsSetRulesActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
