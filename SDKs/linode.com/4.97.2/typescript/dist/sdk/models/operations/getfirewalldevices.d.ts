import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetFirewallDevicesServerList: readonly ["https://api.linode.com/v4"];
export declare class GetFirewallDevicesPathParams extends SpeakeasyBase {
    firewallId: number;
}
export declare class GetFirewallDevicesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetFirewallDevicesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetFirewallDevices200ApplicationJson extends SpeakeasyBase {
    data?: shared.FirewallDevices[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetFirewallDevicesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetFirewallDevicesRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetFirewallDevicesPathParams;
    queryParams: GetFirewallDevicesQueryParams;
    security: GetFirewallDevicesSecurity;
}
export declare class GetFirewallDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFirewallDevices200ApplicationJsonObject?: GetFirewallDevices200ApplicationJson;
    getFirewallDevicesDefaultApplicationJsonObject?: GetFirewallDevicesDefaultApplicationJson;
}
