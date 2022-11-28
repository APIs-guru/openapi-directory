import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteFirewallDeviceServerList: readonly ["https://api.linode.com/v4"];
export declare class DeleteFirewallDevicePathParams extends SpeakeasyBase {
    deviceId: number;
    firewallId: number;
}
export declare class DeleteFirewallDeviceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteFirewallDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFirewallDevicePathParams;
    security: DeleteFirewallDeviceSecurity;
}
export declare class DeleteFirewallDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteFirewallDevice200ApplicationJsonObject?: Map<string, any>;
    deleteFirewallDeviceDefaultApplicationJsonObject?: DeleteFirewallDeviceDefaultApplicationJson;
}
