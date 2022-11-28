import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateFirewallRulesServerList: readonly ["https://api.linode.com/v4"];
export declare class UpdateFirewallRulesPathParams extends SpeakeasyBase {
    firewallId: number;
}
export declare class UpdateFirewallRulesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateFirewallRulesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateFirewallRulesRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFirewallRulesPathParams;
    request?: shared.Rules;
    security: UpdateFirewallRulesSecurity;
}
export declare class UpdateFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rules?: shared.Rules;
    updateFirewallRulesDefaultApplicationJsonObject?: UpdateFirewallRulesDefaultApplicationJson;
}
