import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateFirewallServerList: readonly ["https://api.linode.com/v4"];
export declare class UpdateFirewallPathParams extends SpeakeasyBase {
    firewallId: number;
}
export declare class UpdateFirewallRequestBodyInput extends SpeakeasyBase {
    label?: string;
    tags?: string[];
}
export declare class UpdateFirewallSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateFirewallDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateFirewallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateFirewallPathParams;
    request?: UpdateFirewallRequestBodyInput;
    security: UpdateFirewallSecurity;
}
export declare class UpdateFirewallResponse extends SpeakeasyBase {
    contentType: string;
    firewall?: shared.Firewall;
    statusCode: number;
    updateFirewallDefaultApplicationJsonObject?: UpdateFirewallDefaultApplicationJson;
}
