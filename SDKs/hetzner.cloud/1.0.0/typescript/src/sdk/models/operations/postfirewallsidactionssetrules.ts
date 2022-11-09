import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostFirewallsIdActionsSetRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum {
    In = "in"
,    Out = "out"
}

export enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Esp = "esp"
,    Gre = "gre"
}


export class PostFirewallsIdActionsSetRulesSetRulesRequestRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @Metadata({ data: "json, name=direction" })
  direction: PostFirewallsIdActionsSetRulesSetRulesRequestRuleDirectionEnum;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum;

  @Metadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PostFirewallsIdActionsSetRulesSetRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.PostFirewallsIdActionsSetRulesSetRulesRequestRule })
  rules: PostFirewallsIdActionsSetRulesSetRulesRequestRule[];
}


export class PostFirewallsIdActionsSetRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFirewallsIdActionsSetRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsIdActionsSetRulesSetRulesRequest;
}


// PostFirewallsIdActionsSetRulesActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsIdActionsSetRulesActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsIdActionsSetRulesActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFirewallsIdActionsSetRulesActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFirewallsIdActionsSetRulesActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFirewallsIdActionsSetRulesActionsResponseActionResources })
  resources: PostFirewallsIdActionsSetRulesActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFirewallsIdActionsSetRulesActionsResponseActionStatusEnum;
}


export class PostFirewallsIdActionsSetRulesActionsResponseMetaPagination extends SpeakeasyBase {
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


export class PostFirewallsIdActionsSetRulesActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: PostFirewallsIdActionsSetRulesActionsResponseMetaPagination;
}


export class PostFirewallsIdActionsSetRulesActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.PostFirewallsIdActionsSetRulesActionsResponseAction })
  actions: PostFirewallsIdActionsSetRulesActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: PostFirewallsIdActionsSetRulesActionsResponseMeta;
}


export class PostFirewallsIdActionsSetRulesResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: PostFirewallsIdActionsSetRulesActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
