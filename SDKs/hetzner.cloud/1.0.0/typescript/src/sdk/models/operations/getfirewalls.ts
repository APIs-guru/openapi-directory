import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFirewallsSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}


export class GetFirewallsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFirewallsSortEnum;
}


export class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


export class GetFirewallsFirewallsResponseFirewallAppliedToServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}


export class GetFirewallsFirewallsResponseFirewallAppliedTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to_resources", elemType: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources[];

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetFirewallsFirewallsResponseFirewallAppliedToServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum;
}

export enum GetFirewallsFirewallsResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}

export enum GetFirewallsFirewallsResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}


export class GetFirewallsFirewallsResponseFirewallRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: GetFirewallsFirewallsResponseFirewallRuleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: GetFirewallsFirewallsResponseFirewallRuleProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class GetFirewallsFirewallsResponseFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to", elemType: GetFirewallsFirewallsResponseFirewallAppliedTo })
  appliedTo: GetFirewallsFirewallsResponseFirewallAppliedTo[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GetFirewallsFirewallsResponseFirewallRule })
  rules: GetFirewallsFirewallsResponseFirewallRule[];
}


export class GetFirewallsFirewallsResponseMetaPagination extends SpeakeasyBase {
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


export class GetFirewallsFirewallsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetFirewallsFirewallsResponseMetaPagination;
}


export class GetFirewallsFirewallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewalls", elemType: GetFirewallsFirewallsResponseFirewall })
  firewalls: GetFirewallsFirewallsResponseFirewall[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetFirewallsFirewallsResponseMeta;
}


export class GetFirewallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFirewallsQueryParams;
}


export class GetFirewallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewallsResponse?: GetFirewallsFirewallsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
