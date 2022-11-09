import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFirewallsSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Name = "name"
,    NameAsc = "name:asc"
,    NameDesc = "name:desc"
,    Created = "created"
,    CreatedAsc = "created:asc"
,    CreatedDesc = "created:desc"
}


export class GetFirewallsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFirewallsSortEnum;
}


export class GetFirewallsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFirewallsQueryParams;
}


export class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer;

  @Metadata({ data: "json, name=type" })
  type?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


export class GetFirewallsFirewallsResponseFirewallAppliedToServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
}


export class GetFirewallsFirewallsResponseFirewallAppliedTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to_resources", elemType: operations.GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources[];

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: GetFirewallsFirewallsResponseFirewallAppliedToServer;

  @Metadata({ data: "json, name=type" })
  type: GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum;
}

export enum GetFirewallsFirewallsResponseFirewallRuleDirectionEnum {
    In = "in"
,    Out = "out"
}

export enum GetFirewallsFirewallsResponseFirewallRuleProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Esp = "esp"
,    Gre = "gre"
}


export class GetFirewallsFirewallsResponseFirewallRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @Metadata({ data: "json, name=direction" })
  direction: GetFirewallsFirewallsResponseFirewallRuleDirectionEnum;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: GetFirewallsFirewallsResponseFirewallRuleProtocolEnum;

  @Metadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class GetFirewallsFirewallsResponseFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to", elemType: operations.GetFirewallsFirewallsResponseFirewallAppliedTo })
  appliedTo: GetFirewallsFirewallsResponseFirewallAppliedTo[];

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rules", elemType: operations.GetFirewallsFirewallsResponseFirewallRule })
  rules: GetFirewallsFirewallsResponseFirewallRule[];
}


export class GetFirewallsFirewallsResponseMetaPagination extends SpeakeasyBase {
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


export class GetFirewallsFirewallsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetFirewallsFirewallsResponseMetaPagination;
}


export class GetFirewallsFirewallsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewalls", elemType: operations.GetFirewallsFirewallsResponseFirewall })
  firewalls: GetFirewallsFirewallsResponseFirewall[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetFirewallsFirewallsResponseMeta;
}


export class GetFirewallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewallsResponse?: GetFirewallsFirewallsResponse;

  @Metadata()
  statusCode: number;
}
