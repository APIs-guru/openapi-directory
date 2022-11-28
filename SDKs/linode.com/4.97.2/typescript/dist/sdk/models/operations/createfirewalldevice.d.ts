import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateFirewallDeviceServerList: readonly ["https://api.linode.com/v4"];
export declare class CreateFirewallDevicePathParams extends SpeakeasyBase {
    firewallId: number;
}
export declare enum CreateFirewallDeviceRequestBodyTypeEnum {
    Linode = "linode"
}
export declare class CreateFirewallDeviceRequestBodyInput extends SpeakeasyBase {
    id: number;
    type: CreateFirewallDeviceRequestBodyTypeEnum;
}
export declare class CreateFirewallDeviceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateFirewallDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateFirewallDevicePathParams;
    request?: CreateFirewallDeviceRequestBodyInput;
    security: CreateFirewallDeviceSecurity;
}
export declare class CreateFirewallDeviceResponse extends SpeakeasyBase {
    contentType: string;
    firewallDevices?: shared.FirewallDevices;
    statusCode: number;
    createFirewallDeviceDefaultApplicationJsonObject?: CreateFirewallDeviceDefaultApplicationJson;
}
