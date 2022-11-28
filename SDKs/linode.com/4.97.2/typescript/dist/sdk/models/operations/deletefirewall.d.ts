import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteFirewallServerList: readonly ["https://api.linode.com/v4"];
export declare class DeleteFirewallPathParams extends SpeakeasyBase {
    firewallId: number;
}
export declare class DeleteFirewallSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteFirewallDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteFirewallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFirewallPathParams;
    security: DeleteFirewallSecurity;
}
export declare class DeleteFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteFirewall200ApplicationJsonObject?: Map<string, any>;
    deleteFirewallDefaultApplicationJsonObject?: DeleteFirewallDefaultApplicationJson;
}
