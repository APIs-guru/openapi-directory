import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetFirewallRulesServerList: readonly ["https://api.linode.com/v4"];
export declare class GetFirewallRulesPathParams extends SpeakeasyBase {
    firewallId: number;
}
export declare class GetFirewallRulesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetFirewallRulesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetFirewallRulesRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetFirewallRulesPathParams;
    security: GetFirewallRulesSecurity;
}
export declare class GetFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFirewallRulesDefaultApplicationJsonObject?: GetFirewallRulesDefaultApplicationJson;
    rules?: shared.Rules;
}
