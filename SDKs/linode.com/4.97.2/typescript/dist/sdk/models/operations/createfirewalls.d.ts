import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateFirewallsServerList: readonly ["https://api.linode.com/v4"];
/**
 * Devices to create for this Firewall.
 * When a Device is created, the Firewall is assigned to its associated service.
 * Currently, Devices can only be created for Linode instances.
 *
**/
export declare class CreateFirewallsRequestBodyDevices extends SpeakeasyBase {
    linodes?: number[];
}
export declare enum CreateFirewallsRequestBodyRulesInboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}
export declare enum CreateFirewallsRequestBodyRulesOutboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}
/**
 * The inbound and outbound access rules to apply to the Firewall.
 *
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 *
**/
export declare class CreateFirewallsRequestBodyRules extends SpeakeasyBase {
    inbound?: shared.FirewallRuleConfig[];
    inboundPolicy?: CreateFirewallsRequestBodyRulesInboundPolicyEnum;
    outbound?: shared.FirewallRuleConfig[];
    outboundPolicy?: CreateFirewallsRequestBodyRulesOutboundPolicyEnum;
}
export declare class CreateFirewallsRequestBodyInput extends SpeakeasyBase {
    devices?: CreateFirewallsRequestBodyDevices;
    label: string;
    rules: CreateFirewallsRequestBodyRules;
    tags?: string[];
}
export declare class CreateFirewallsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateFirewallsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateFirewallsRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateFirewallsRequestBodyInput;
    security: CreateFirewallsSecurity;
}
export declare class CreateFirewallsResponse extends SpeakeasyBase {
    contentType: string;
    firewall?: shared.Firewall;
    statusCode: number;
    createFirewallsDefaultApplicationJsonObject?: CreateFirewallsDefaultApplicationJson;
}
