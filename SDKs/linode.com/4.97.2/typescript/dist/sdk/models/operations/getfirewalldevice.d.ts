import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetFirewallDeviceServerList: readonly ["https://api.linode.com/v4"];
export declare class GetFirewallDevicePathParams extends SpeakeasyBase {
    deviceId: number;
    firewallId: number;
}
export declare class GetFirewallDeviceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetFirewallDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetFirewallDevicePathParams;
    security: GetFirewallDeviceSecurity;
}
export declare class GetFirewallDeviceResponse extends SpeakeasyBase {
    contentType: string;
    firewallDevices?: shared.FirewallDevices;
    statusCode: number;
    getFirewallDeviceDefaultApplicationJsonObject?: GetFirewallDeviceDefaultApplicationJson;
}
