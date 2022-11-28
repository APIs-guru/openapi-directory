import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetFirewallsSortEnum {
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
export declare class GetFirewallsQueryParams extends SpeakeasyBase {
    labelSelector?: string;
    name?: string;
    sort?: GetFirewallsSortEnum;
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
    id: number;
}
export declare enum GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
    server?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesServer;
    type?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
    selector: string;
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedToServer extends SpeakeasyBase {
    id: number;
}
export declare enum GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}
export declare class GetFirewallsFirewallsResponseFirewallAppliedTo extends SpeakeasyBase {
    appliedToResources?: GetFirewallsFirewallsResponseFirewallAppliedToAppliedToResources[];
    labelSelector?: GetFirewallsFirewallsResponseFirewallAppliedToLabelSelector;
    server?: GetFirewallsFirewallsResponseFirewallAppliedToServer;
    type: GetFirewallsFirewallsResponseFirewallAppliedToTypeEnum;
}
export declare enum GetFirewallsFirewallsResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}
export declare enum GetFirewallsFirewallsResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}
export declare class GetFirewallsFirewallsResponseFirewallRule extends SpeakeasyBase {
    description?: string;
    destinationIps?: string[];
    direction: GetFirewallsFirewallsResponseFirewallRuleDirectionEnum;
    port?: string;
    protocol: GetFirewallsFirewallsResponseFirewallRuleProtocolEnum;
    sourceIps?: string[];
}
export declare class GetFirewallsFirewallsResponseFirewall extends SpeakeasyBase {
    appliedTo: GetFirewallsFirewallsResponseFirewallAppliedTo[];
    created: string;
    id: number;
    labels?: Map<string, string>;
    name: string;
    rules: GetFirewallsFirewallsResponseFirewallRule[];
}
export declare class GetFirewallsFirewallsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetFirewallsFirewallsResponseMeta extends SpeakeasyBase {
    pagination: GetFirewallsFirewallsResponseMetaPagination;
}
export declare class GetFirewallsFirewallsResponse extends SpeakeasyBase {
    firewalls: GetFirewallsFirewallsResponseFirewall[];
    meta?: GetFirewallsFirewallsResponseMeta;
}
export declare class GetFirewallsRequest extends SpeakeasyBase {
    queryParams: GetFirewallsQueryParams;
}
export declare class GetFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    firewallsResponse?: GetFirewallsFirewallsResponse;
    statusCode: number;
}
