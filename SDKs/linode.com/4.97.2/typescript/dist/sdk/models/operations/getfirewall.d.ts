import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetFirewallServerList: readonly ["https://api.linode.com/v4"];
export declare class GetFirewallPathParams extends SpeakeasyBase {
    firewallId: number;
}
export declare class GetFirewallSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetFirewallDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetFirewallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetFirewallPathParams;
    security: GetFirewallSecurity;
}
export declare class GetFirewallResponse extends SpeakeasyBase {
    contentType: string;
    firewall?: shared.Firewall;
    statusCode: number;
    getFirewallDefaultApplicationJsonObject?: GetFirewallDefaultApplicationJson;
}
